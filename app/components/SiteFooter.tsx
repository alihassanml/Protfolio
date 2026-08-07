import Link from "next/link";
import { nav, site } from "@/lib/site";

const social = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Kaggle", href: site.links.kaggle },
  { label: "Upwork", href: site.links.upwork },
  { label: "X", href: site.links.twitter },
];

export default function SiteFooter() {
  return (
    <footer className="bg-oat">
      <div className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label">Ali Hassan · alihassanml</p>
            <p className="d-3 mt-4 font-display font-bold tracking-tight text-ink">
              AI systems that ship, not demos that stall.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-quiet mt-6 inline-block text-lg text-ink-soft hover:text-ink"
            >
              {site.email}
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="label">Pages</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-quiet text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-quiet text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 flex flex-col justify-between gap-3 pt-6 sm:flex-row">
          <p className="label">© {new Date().getFullYear()} Ali Hassan</p>
          <p className="label">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
