"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/les-recoltes-majeures-la-rose", label: "Les Récoltes Majeures La Rose" },
  { href: "/eine-sonniger-auszeit", label: "Eine sonniger Auszeit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) return;

    setScrolled(window.scrollY > 10);

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`z-30 transition-colors ${isHome ? "fixed top-0 inset-x-0" : "sticky top-0"} ${
          overlay
            ? "border-b border-transparent bg-transparent"
            : "border-b border-zinc-100 bg-white/90 backdrop-blur dark:border-zinc-900 dark:bg-black/90"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`flex w-7 cursor-pointer items-center justify-center ${overlay ? "text-white" : ""}`}
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 24 26"
              fill="none"
              aria-hidden="true"
            >
              <line x1="1" y1="3" x2="23" y2="3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              <line x1="1" y1="13" x2="23" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              <line x1="1" y1="23" x2="23" y2="23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/"
            className={`text-xs font-medium tracking-[0.25em] uppercase ${overlay ? "text-white" : ""}`}
          >
            The 42 Co.
          </Link>
          <div className="w-7" />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 cursor-pointer bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.nav
              key="panel"
              aria-label="Site menu"
              className="fixed inset-y-0 left-0 z-50 flex h-full w-[85vw] max-w-sm flex-col gap-8 bg-white px-6 py-6 shadow-xl dark:bg-black"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium tracking-[0.25em] uppercase">Menu</p>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-xl leading-none"
                >
                  ✕
                </button>
              </div>
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-lg text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
