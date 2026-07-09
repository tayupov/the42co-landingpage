"use client";

import { useSyncExternalStore } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export default function Hero() {
  const isMobile = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );

  return (
    <div className="relative h-svh w-full overflow-hidden bg-black">
      <video
        key={isMobile ? "mobile" : "desktop"}
        ref={(el) => {
          if (el) el.playbackRate = 0.75;
        }}
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
      <i className="font-serif absolute top-48 left-[38px] z-10 origin-left -rotate-90 text-xl whitespace-nowrap text-white/90 sm:text-2xl">
        The 42 Company
      </i>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-6 text-center text-white" />
    </div>
  );
}
