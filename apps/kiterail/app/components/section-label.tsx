type SectionLabelProps = {
  label: string;
  /** Colored prefix — a number ("01"), symbol ("—"), etc. Omit for plain rule + label. */
  marker?: string;
  className?: string;
};

export function SectionLabel({ label, marker, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] ${className}`}
    >
      {marker && <span className="text-brand-600">{marker}</span>}
      <span className="h-px w-5 bg-[var(--color-surface-border)] inline-block" />
      {label}
    </p>
  );
}
