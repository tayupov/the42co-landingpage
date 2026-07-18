import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex h-svh w-full flex-col bg-[url('/passionfruit-hero.png')] bg-cover bg-[center_65%] pt-12 sm:grid sm:grid-cols-[1fr_2fr]">
      <div className="flex flex-col justify-end gap-4 px-6 pb-16 sm:justify-center sm:px-10 sm:pb-16">
        <h1 className="font-sans text-4xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
          Find your spark.
        </h1>
        <p className="font-sans max-w-md text-sm text-stone-700 sm:text-base">
          Introducing "Passionfruit" — our functional fragrance designed for an instant lift in mood and energy.
          <br />
          <br />
          Notes of Passion Fruit, Cotton Candy and Sandalwood.
        </p>
        <Link
          href="/passionfruit"
          className="inline-block w-fit rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-800"
        >
          Shop Passionfruit
        </Link>
      </div>
    </div>
  );
}
