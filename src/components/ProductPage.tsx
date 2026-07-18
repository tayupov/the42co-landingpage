import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export type ScentNote = { name: string; nameEn: string; prominence: number };

export type ScentPyramid = {
  topNotes: ScentNote[];
  heartNotes: ScentNote[];
  baseNotes: ScentNote[];
};

export type ProductPageProps = {
  title: string;
  brand: string | null;
  scentDirection: string[];
  scentPyramid: ScentPyramid;
  ratings: {
    longevity: { value: number; count: number };
    sillage: { value: number; count: number };
  };
  conceptImage?: string;
  heroImage?: string;
};

function DotRating({ level }: { level: number }) {
  const clamped = Math.max(0, Math.min(5, Math.round(level)));
  return (
    <span className="shrink-0 tracking-widest text-emerald-700 dark:text-emerald-500">
      {"●".repeat(clamped)}
      <span className="text-zinc-300 dark:text-zinc-700">{"●".repeat(5 - clamped)}</span>
    </span>
  );
}

function NoteRow({ note }: { note: ScentNote }) {
  return <li>{note.nameEn}</li>;
}

const ACCORD_ICONS: Partial<Record<string, string>> = {
  Juniper: "/accords/juniper.webp",
  "Vetiveryl": "/accords/vetiver.webp",
  Sandalwood: "/accords/sandalwood.webp",
  "Passion Fruit": "/accords/passion-fruit.webp",
  "Cotton Candy": "/accords/cotton-candy.webp",
};

function AccordRow({ note }: { note: ScentNote }) {
  const icon = ACCORD_ICONS[note.nameEn];
  return (
    <li className="flex items-center gap-2.5">
      {icon ? (
        <Image
          src={icon}
          alt=""
          width={30}
          height={30}
          className="h-[30px] w-[30px] shrink-0 rounded-full object-cover"
        />
      ) : (
        <span className="h-[30px] w-[30px] shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800" />
      )}
      <div className="flex flex-col">
        <span>{note.nameEn}</span>
        <DotRating level={note.prominence} />
      </div>
    </li>
  );
}

function topNoteOf(notes: ScentNote[]): ScentNote {
  return notes.reduce((max, note) => (note.prominence > max.prominence ? note : max));
}

const REVIEWS = [
  {
    name: "[Reviewer Name]",
    rating: "5.0",
    title: "[Review Title]",
    body: "[Review body text describing the customer's experience with the product.]",
  },
  {
    name: "[Reviewer Name]",
    rating: "5.0",
    title: "[Review Title]",
    body: "[Review body text describing the customer's experience with the product.]",
  },
  {
    name: "[Reviewer Name]",
    rating: "4.5",
    title: "[Review Title]",
    body: "[Review body text describing the customer's experience with the product.]",
  },
];

export default function ProductPage({
  title,
  brand,
  scentDirection,
  scentPyramid,
  ratings,
  conceptImage,
  heroImage,
}: ProductPageProps) {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-6 pt-6 pb-12 md:grid-cols-2 md:gap-10 md:pt-8 md:pb-16">
        {heroImage ? (
          <div className="relative aspect-[3/4] w-full md:max-h-[min(640px,calc(100svh-173px))]">
            <Image src={heroImage} alt="" fill className="object-contain" />
          </div>
        ) : (
          <ImagePlaceholder
            label="[placeholder-image.jpg]"
            className="aspect-[3/4] w-full md:max-h-[min(640px,calc(100svh-173px))] md:object-cover"
          />
        )}

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline gap-3">
              <h1 className="font-sans text-5xl font-medium tracking-tight">{title}</h1>
              <i className="font-serif text-base text-zinc-400 dark:text-zinc-500">Coming Soon</i>
            </div>
          </div>
          <p className="text-xs leading-normal text-zinc-600 dark:text-zinc-300">
            [Product description goes here — a short paragraph introducing the product, its
            character, and what makes it worth trying.]
          </p>
          <div className="flex flex-wrap gap-1.5">
            {scentDirection.map((direction) => (
              <span
                key={direction}
                className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-[11px] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
              >
                {direction}
              </span>
            ))}
          </div>

          <div className="grid w-fit grid-cols-[auto_1fr] gap-0 rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
            <div className="flex flex-col gap-2 pr-4 text-xs text-zinc-600 dark:text-zinc-300">
              {(
                [
                  ["Top Notes", scentPyramid.topNotes],
                  ["Heart Notes", scentPyramid.heartNotes],
                  ["Base Notes", scentPyramid.baseNotes],
                ] as const
              ).map(([label, notes]) => (
                <div key={label}>
                  <p className="mb-0.5 text-xs font-bold text-zinc-800 dark:text-zinc-100">{label}</p>
                  <ul className="flex flex-col gap-0.5">
                    {notes.slice(0, 3).map((note) => (
                      <NoteRow key={note.nameEn} note={note} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start gap-1.5 border-l border-zinc-200 pl-4 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
              <p className="mb-0.5 text-xs font-bold text-zinc-800 dark:text-zinc-100">Main Accords</p>
              <ul className="flex flex-col gap-1.5">
                <AccordRow note={topNoteOf(scentPyramid.topNotes)} />
                <AccordRow note={topNoteOf(scentPyramid.heartNotes)} />
                <AccordRow note={topNoteOf(scentPyramid.baseNotes)} />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Concept / Science */}
      <section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-sans text-4xl font-medium tracking-tight sm:text-5xl">The [Concept]</h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              [Opening paragraph explaining the idea behind the product —] <em>the underlying
              philosophy or research</em> [that grounds the experience in something concrete.]
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              [Second paragraph going deeper into] <em>a specific detail or ingredient</em>
              [worth highlighting, tying it back to the customer&apos;s experience.]
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              [Closing paragraph connecting the concept to] <em>the product line as a whole</em>
              [and what it means for the customer.]
            </p>
          </div>
          {conceptImage ? (
            <div className="relative aspect-[4/3] w-full self-center overflow-hidden">
              <Image src={conceptImage} alt="" fill className="object-cover" />
            </div>
          ) : (
            <ImagePlaceholder label="[placeholder-image.jpg]" className="min-h-[320px] w-full" />
          )}
        </div>
      </section>

      {/* Characteristics */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 sm:grid-cols-2 md:py-28">
        {["A", "B"].map((variant) => (
          <div key={variant} className="flex flex-col items-center gap-6 text-center">
            <h3 className="font-sans text-2xl font-medium tracking-tight">Matches [Characteristic {variant}]</h3>
            <div className="relative">
              <ImagePlaceholder
                label="[placeholder-image.jpg]"
                className="aspect-square w-56 rounded-full"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded bg-white px-4 py-1 text-xs tracking-wide whitespace-nowrap text-zinc-600 shadow dark:bg-black dark:text-zinc-300">
                [Descriptor Tag]
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Media showcase */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="relative flex aspect-video w-full items-center justify-center bg-zinc-200 dark:bg-zinc-900">
          <span className="absolute text-xs text-zinc-400 dark:text-zinc-600">
            [placeholder-video-thumbnail.jpg]
          </span>
          <button className="relative flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-medium backdrop-blur hover:bg-white dark:bg-black/60 dark:hover:bg-black">
            ▶ Play video
          </button>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <ImagePlaceholder label="[placeholder-image.jpg]" className="min-h-[420px] w-full" />

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-sans text-4xl font-medium tracking-tight sm:text-5xl">Customer Reviews</h2>
            <div className="mt-3 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span>4.9 stars based on [24] Reviews</span>
            </div>
          </div>

          <ul className="flex flex-col gap-8">
            {REVIEWS.map((review, index) => (
              <li key={index} className="flex flex-col gap-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {review.name} · {review.rating} Rating
                </p>
                <p className="font-semibold">{review.title}</p>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {review.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
