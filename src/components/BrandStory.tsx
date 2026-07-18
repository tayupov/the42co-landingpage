"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const MOODS = [
  {
    name: "Passionfruit",
    href: "/passionfruit",
  },
  {
    name: "Earth",
    href: "/earth",
  },
];

export default function BrandStory() {
  return (
    <section className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div {...REVEAL} className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-4xl font-medium tracking-tight sm:text-5xl">
            Functional Fragrances for every mood.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            The 42 Co. designs fragrance the way you&apos;d design a tool — formulated around an
            outcome, not an occasion. Every scent is engineered to shift how you feel, backed by
            real chemistry rather than a flowery backstory.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {MOODS.map((mood, index) => (
            <motion.div
              key={mood.name}
              {...REVEAL}
              transition={{ ...REVEAL.transition, delay: index * 0.12 }}
            >
              <Link href={mood.href} className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <ImagePlaceholder label="[placeholder-image.jpg]" className="h-full w-full" />
                </div>
                <h3 className="mt-4 font-sans text-2xl font-medium tracking-tight">{mood.name}</h3>
                <span className="mt-1 inline-block text-sm tracking-wide underline underline-offset-4">
                  Shop {mood.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
