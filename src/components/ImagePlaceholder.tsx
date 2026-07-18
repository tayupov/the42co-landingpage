export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-zinc-300 bg-zinc-100 text-center text-xs text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-600 ${className}`}
    >
      {label}
    </div>
  );
}
