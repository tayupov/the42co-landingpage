import Link from "next/link";


const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/the42co", label: "Instagram"},
  { href: "https://www.tiktok.com/@the42co", label: "TikTok"},
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-12 text-sm text-zinc-500 dark:bg-black dark:text-zinc-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Socials
          </p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Legal
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end">
            <Link href="/impressum" className="hover:text-zinc-900 dark:hover:text-white">
              Imprint
            </Link>
            <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white">
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-600">
        © {new Date().getFullYear()} The 42 Co. All rights reserved.
      </p>
    </footer>
  );
}
