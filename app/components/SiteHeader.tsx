"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes, adjusted during render
  // rather than in an effect so it never triggers a cascading re-render.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-paper/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          aria-label="Ali Hassan, AI Engineer, home"
          className="font-display text-xl font-bold tracking-tight text-ink"
        >
          Ali Hassan
          <span className="ml-2 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-ink-mute">
            AI Engineer
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-quiet font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-pine" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.links.calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-pine"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-sand bg-paper px-6 pb-8 pt-4 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 font-display text-3xl font-bold tracking-tight text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.links.calendly}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-ink px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper"
          >
            Book a call
          </a>
        </nav>
      )}
    </header>
  );
}
