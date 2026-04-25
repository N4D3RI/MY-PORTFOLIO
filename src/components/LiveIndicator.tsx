type Props = {
  size?: number;
  className?: string;
};

export function LiveIndicator({ size = 8, className = "" }: Props) {
  return (
    <span
      aria-hidden
      className={`inline-block signal-pulse ${className}`}
      style={{
        width: size,
        height: size,
        background: "var(--color-signal)",
      }}
    />
  );
}
