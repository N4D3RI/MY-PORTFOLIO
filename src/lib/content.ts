import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentKind = "projects" | "writing" | "experiences";

export type Status = "live" | "wip" | "draft" | "archived";
export type ProjectType = "software" | "hardware" | "research";
export type WritingKind = "blog" | "paper";

export interface ProjectMeta {
  kind: "projects";
  slug: string;
  title: string;
  date: string;         // ISO date string
  type: ProjectType;
  status: Status;
  stack: string[];
  summary: string;
  repo?: string;
  live?: string;
  paper?: string;
  cover?: string;
  duration?: string;    // e.g. "6 weeks" — optional for hover-reveal
  role?: string;        // e.g. "engineer + writer"
}

export interface WritingMeta {
  kind: "writing";
  slug: string;
  title: string;
  date: string;
  writingKind: WritingKind;
  summary: string;
  tags: string[];
  paperPdf?: string;
  readingTime?: number;
}

export interface ExperienceMeta {
  kind: "experiences";
  slug: string;
  title: string;
  location?: string;
  dateStart: string;
  dateEnd: string;          // ISO or "present"
  summary: string;
  linkedProjects?: string[];
  linkedWriting?: string[];
}

export type AnyMeta = ProjectMeta | WritingMeta | ExperienceMeta;

export interface Content<M extends AnyMeta> {
  meta: M;
  body: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readDir(kind: ContentKind): string[] {
  const dir = path.join(CONTENT_ROOT, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => path.join(dir, f));
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

function readingTimeMinutes(text: string): number {
  return Math.max(1, Math.round(wordCount(text) / 220));
}

export function getProjects(): ProjectMeta[] {
  return readDir("projects")
    .map((file) => {
      const raw = fs.readFileSync(file, "utf8");
      const { data } = matter(raw);
      const slug = path.basename(file, ".mdx");
      return {
        kind: "projects" as const,
        slug,
        title: String(data.title ?? slug),
        date: normalizeDate(data.date),
        type: (data.type ?? "software") as ProjectType,
        status: (data.status ?? "draft") as Status,
        stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
        summary: String(data.summary ?? ""),
        repo: data.repo ? String(data.repo) : undefined,
        live: data.live ? String(data.live) : undefined,
        paper: data.paper ? String(data.paper) : undefined,
        cover: data.cover ? String(data.cover) : undefined,
        duration: data.duration ? String(data.duration) : undefined,
        role: data.role ? String(data.role) : undefined,
      };
    })
    .sort(byDateDesc);
}

export function getWriting(): WritingMeta[] {
  return readDir("writing")
    .map((file) => {
      const raw = fs.readFileSync(file, "utf8");
      const { data, content } = matter(raw);
      const slug = path.basename(file, ".mdx");
      return {
        kind: "writing" as const,
        slug,
        title: String(data.title ?? slug),
        date: normalizeDate(data.date),
        writingKind: (data.kind ?? "blog") as WritingKind,
        summary: String(data.summary ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        paperPdf: data.paperPdf ? String(data.paperPdf) : undefined,
        readingTime: readingTimeMinutes(content),
      };
    })
    .sort(byDateDesc);
}

export function getExperiences(): ExperienceMeta[] {
  return readDir("experiences")
    .map((file) => {
      const raw = fs.readFileSync(file, "utf8");
      const { data } = matter(raw);
      const slug = path.basename(file, ".mdx");
      return {
        kind: "experiences" as const,
        slug,
        title: String(data.title ?? slug),
        location: data.location ? String(data.location) : undefined,
        dateStart: normalizeDate(data.dateStart),
        dateEnd: String(data.dateEnd ?? "present"),
        summary: String(data.summary ?? ""),
        linkedProjects: Array.isArray(data.linkedProjects) ? data.linkedProjects.map(String) : [],
        linkedWriting: Array.isArray(data.linkedWriting) ? data.linkedWriting.map(String) : [],
      };
    })
    .sort((a, b) => (a.dateStart < b.dateStart ? 1 : -1));
}

export function getProjectBySlug(slug: string): Content<ProjectMeta> | null {
  const file = path.join(CONTENT_ROOT, "projects", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      kind: "projects",
      slug,
      title: String(data.title ?? slug),
      date: normalizeDate(data.date),
      type: (data.type ?? "software") as ProjectType,
      status: (data.status ?? "draft") as Status,
      stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
      summary: String(data.summary ?? ""),
      repo: data.repo ? String(data.repo) : undefined,
      live: data.live ? String(data.live) : undefined,
      paper: data.paper ? String(data.paper) : undefined,
      cover: data.cover ? String(data.cover) : undefined,
      duration: data.duration ? String(data.duration) : undefined,
      role: data.role ? String(data.role) : undefined,
    },
    body: content,
  };
}

export function getWritingBySlug(slug: string): Content<WritingMeta> | null {
  const file = path.join(CONTENT_ROOT, "writing", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      kind: "writing",
      slug,
      title: String(data.title ?? slug),
      date: normalizeDate(data.date),
      writingKind: (data.kind ?? "blog") as WritingKind,
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      paperPdf: data.paperPdf ? String(data.paperPdf) : undefined,
      readingTime: readingTimeMinutes(content),
    },
    body: content,
  };
}

export function getRecent(limit = 5): AnyMeta[] {
  const items: AnyMeta[] = [
    ...getProjects(),
    ...getWriting(),
    ...getExperiences().map((e) => ({ ...e, date: e.dateStart } as unknown as AnyMeta)),
  ];
  return items
    .map((item) => ({ item, d: "date" in item ? item.date : (item as ExperienceMeta).dateStart }))
    .sort((a, b) => (a.d < b.d ? 1 : -1))
    .slice(0, limit)
    .map(({ item }) => item);
}

function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return a.date < b.date ? 1 : -1;
}

function normalizeDate(value: unknown): string {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const str = String(value);
  return str.length >= 10 ? str.slice(0, 10) : str;
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  return iso.replace(/-/g, ".");
}

export function formatTypeLabel(t: ProjectType): string {
  return t.toUpperCase();
}
