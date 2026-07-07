export default function LegalPageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h1>
      <div className="space-y-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </main>
  );
}
