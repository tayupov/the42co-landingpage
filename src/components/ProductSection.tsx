import Link from "next/link";

type ProductSectionProps = {
  eyebrow?: string;
  title: string;
  cta?: string;
  href: string;
  className: string;
};

export default function ProductSection({
  eyebrow,
  title,
  cta = "Entdecken",
  href,
  className,
}: ProductSectionProps) {
  return (
    <section
      className={`relative flex h-[85vh] min-h-[520px] w-full items-center justify-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center text-white">
        {eyebrow && (
          <p className="text-xs font-medium tracking-[0.2em] uppercase">{eyebrow}</p>
        )}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">{title}</h2>
        <Link href={href} className="mt-2 text-sm tracking-wide underline underline-offset-4">
          {cta}
        </Link>
      </div>
    </section>
  );
}
