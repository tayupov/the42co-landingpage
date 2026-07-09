import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection
        eyebrow="Neue Kollektion"
        title="Les Récoltes Majeures La Rose"
        href="/les-recoltes-majeures-la-rose"
        className="bg-gradient-to-br from-rose-200 via-amber-100 to-stone-300"
      />
      <ProductSection
        eyebrow="Limited Edition"
        title="Eine sonniger Auszeit"
        cta="Entdecken"
        href="/eine-sonniger-auszeit"
        className="bg-gradient-to-br from-sky-100 via-amber-50 to-emerald-100"
      />
    </>
  );
}
