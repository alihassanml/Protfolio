import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/app/components/Reveal";
import SplitHeading from "@/app/components/SplitHeading";
import ProjectsExplorer from "@/app/components/ProjectsExplorer";
import { categories, projects } from "@/lib/projects";
import { site, stats } from "@/lib/site";

const description =
  "AI projects by Ali Hassan (alihassanml): agentic AI, voice agents, RAG pipelines and YOLOv11 computer vision models. All of it open source on GitHub.";

export const metadata: Metadata = {
  title: "AI & Machine Learning Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "AI & Machine Learning Projects by Ali Hassan",
    description,
    url: `${site.url}/projects`,
    type: "website",
  },
};

/** Counts read from the data, so the page can never drift from lib/. */
const figures = [
  ...stats
    .filter(
      (stat) =>
        stat.label === "Public repositories" ||
        stat.label === "GitHub stars earned",
    )
    .map((stat) => ({ value: `${stat.value}${stat.suffix}`, label: stat.label })),
  { value: `${categories.length}`, label: "Focus areas" },
];

/** ItemList so each project can surface as its own result. */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI and machine learning projects by Ali Hassan",
  description,
  url: `${site.url}/projects`,
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    description: project.blurb,
    url: project.repo,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Intro */}
      <section className="mx-auto max-w-[88rem] px-6 pb-14 pt-32 lg:px-12 lg:pb-20 lg:pt-40">
        <Reveal>
          <p className="label">The work, in the open</p>
        </Reveal>

        <SplitHeading
          as="h1"
          immediate
          text="AI and machine learning projects"
          className="d-1 mt-5 max-w-4xl font-display font-bold text-ink"
        />

        <Reveal className="mt-8 max-w-2xl">
          <p className="lede">
            These are the computer vision, language and agentic systems I have
            built and left running — trained models, deployed services, and the
            code behind both. All of it is public on GitHub as {site.handle},
            alongside the rest of the repositories.
          </p>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="link-quiet mt-8 inline-block font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink"
          >
            Browse the GitHub profile
          </a>
        </Reveal>

        <Reveal
          stagger
          className="hairline mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 pt-6"
        >
          {figures.map((figure, index) => (
            <div key={figure.label} className="flex items-center gap-7">
              {index > 0 && (
                <span aria-hidden className="h-3.5 w-px bg-sand" />
              )}
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
                <span className="text-ink">{figure.value}</span>{" "}
                {figure.label}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Index */}
      <section
        className="mx-auto max-w-[88rem] px-6 pb-20 lg:px-12 lg:pb-28"
        aria-label="Project index"
      >
        <ProjectsExplorer />
      </section>

      {/* Close */}
      <section className="mx-auto max-w-[88rem] px-6 pb-24 lg:px-12 lg:pb-32">
        <Reveal className="rounded-2xl bg-oat px-8 py-16 lg:px-16 lg:py-24">
          <p className="label">Next one</p>
          <h2 className="d-1 mt-5 max-w-3xl font-display font-bold text-ink">
            Yours could be the next repository.
          </h2>
          <p className="lede mt-6 max-w-xl">
            If one of these is close to the thing you need built, say so and I
            will tell you what it would take.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-ink px-7 py-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-pine"
          >
            Start a project
          </Link>
        </Reveal>
      </section>
    </>
  );
}
