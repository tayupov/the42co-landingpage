"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const MOBILE_QUERY = "(max-width: 767px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[180dvh]">
      <div className="sticky top-0 flex h-dvh w-full items-center justify-center overflow-hidden bg-white dark:bg-black">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative h-full w-full overflow-hidden bg-black"
        >
          <video
            key={isMobile ? "mobile" : "desktop"}
            className="absolute inset-0 h-full w-full object-cover object-[30%_center] opacity-70 md:object-center"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
          >
            <source src={isMobile ? "/hero-mobile.mp4" : "/hero.mp4"} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-6 text-center text-white"
          >
            <h1 className="font-serif text-5xl tracking-[0.2em] sm:text-6xl md:text-7xl">
              CLUB DES NAGEURS
            </h1>
            <p className="max-w-md text-xs uppercase tracking-[0.35em] text-white/80">
              Effortless Confidence. Bottled.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
