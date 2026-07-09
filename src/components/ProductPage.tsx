type ProductPageProps = {
  title: string;
};

function ImagePlaceholder({
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

const SPEC_ATTRIBUTES = ["[Key Attribute 1]", "[Key Attribute 2]", "[Key Attribute 3]"];

const SPEC_METRICS = [
  { label: "[Metric 1]", level: 4 },
  { label: "[Metric 2]", level: 3 },
  { label: "[Metric 3]", level: 5 },
];

const BADGES = ["[Badge 1]", "[Badge 2]", "[Badge 3]"];

const SIZES = ["[Size 1]", "[Size 2]"];

const CROSS_SELL_ITEMS = [
  { name: "[Product Name A]", description: "[Short description of the complementary product.]" },
  { name: "[Product Name B]", description: "[Short description of the complementary product.]" },
];

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

export default function ProductPage({ title }: ProductPageProps) {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <ImagePlaceholder label="[placeholder-image.jpg]" className="aspect-[3/4] w-full" />

        <div className="flex flex-col gap-6">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">★ 4.9 Rating · [14] Reviews</p>
          <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
          <p className="-mt-4 text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase dark:text-zinc-400">
            [Collection / Category]
          </p>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            [Product description goes here — a short paragraph introducing the product, its
            character, and what makes it worth trying.]
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">By [Creator Name]</p>

          <div className="grid grid-cols-2 gap-6 rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
            <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              {SPEC_ATTRIBUTES.map((attribute) => (
                <li key={attribute}>{attribute}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              {SPEC_METRICS.map(({ label, level }) => (
                <li key={label} className="flex items-center justify-between gap-2">
                  <span>{label}</span>
                  <span className="tracking-widest text-emerald-700 dark:text-emerald-500">
                    {"●".repeat(level)}
                    <span className="text-zinc-300 dark:text-zinc-700">
                      {"●".repeat(5 - level)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {SIZES.map((size) => (
              <span
                key={size}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
              >
                {size}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-full bg-emerald-50 px-6 py-4 text-sm font-medium text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
            <span>Add to Cart</span>
            <span>[$Price]</span>
          </div>
        </div>
      </section>

      {/* Concept / Science */}
      <section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-serif text-4xl sm:text-5xl">The [Concept]</h2>
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
          <ImagePlaceholder label="[placeholder-image.jpg]" className="min-h-[320px] w-full" />
        </div>
      </section>

      {/* Characteristics */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 sm:grid-cols-2 md:py-28">
        {["A", "B"].map((variant) => (
          <div key={variant} className="flex flex-col items-center gap-6 text-center">
            <h3 className="font-serif text-2xl">Matches [Characteristic {variant}]</h3>
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

      {/* Cross-sell */}
      <section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl sm:text-5xl">Pairs Well With...</h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              [Short paragraph explaining the cross-sell concept — how these products complement
              this one and can be layered or paired together.]
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {CROSS_SELL_ITEMS.map((item) => (
              <div key={item.name} className="flex gap-4">
                <ImagePlaceholder
                  label="[placeholder-image.jpg]"
                  className="aspect-[3/4] w-28 shrink-0"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((dot) => (
                      <span
                        key={dot}
                        className="h-6 w-6 rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
                      />
                    ))}
                  </div>
                  <button className="mt-1 w-fit rounded-full border border-zinc-300 px-4 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <ImagePlaceholder label="[placeholder-image.jpg]" className="min-h-[420px] w-full" />

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl">Customer Reviews</h2>
            <div className="mt-3 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span>4.9 stars based on [24] Reviews</span>
              <button className="underline underline-offset-4">Write a review</button>
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

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Prev &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; Next
          </p>
        </div>
      </section>
    </div>
  );
}
