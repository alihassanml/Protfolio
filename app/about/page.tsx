import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import { site } from "@/lib/site";

const description =
  "Ali Hassan (alihassanml) is an AI Engineer and Data Scientist in Lahore, Pakistan, building agentic AI, voice agents, RAG and computer vision systems.";

export const metadata: Metadata = {
  title: {
    absolute: "About Ali Hassan | AI Engineer & Data Scientist in Lahore",
  },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ali Hassan | AI Engineer & Data Scientist in Lahore",
    description,
    url: `${site.url}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ali Hassan | AI Engineer & Data Scientist",
    description,
  },
};

/** ProfilePage → Person. The page that tells search engines who "alihassanml" is. */
const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/about#profilepage`,
  url: `${site.url}/about`,
  name: "About Ali Hassan | AI Engineer & Data Scientist",
  description,
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    alternateName: [site.handle],
    jobTitle: site.role,
    description: site.summary,
    url: site.url,
    image: `${site.url}/image.jpeg`,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: Object.values(site.links),
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "YOLOv11 Object Detection",
      "Ultralytics",
      "OpenCV",
      "Large Language Models",
      "Agentic AI",
      "LangChain",
      "Pydantic AI",
      "Model Context Protocol",
      "Ollama",
      "Retrieval Augmented Generation",
      "Knowledge Graphs",
      "Federated Learning",
      "Natural Language Processing",
      "MLOps",
      "DVC",
      "Data Science",
      "Python",
      "FastAPI",
      "TypeScript",
    ],
  },
};

/** Meta rows beside the portrait: facts, not decoration. */
const facts: { term: string; detail: string; href?: string }[] = [
  { term: "Based in", detail: site.location },
  { term: "Handle", detail: site.handle, href: site.links.github },
  { term: "Focus", detail: "Computer vision · LLMs · RAG · MLOps" },
  { term: "Clients via", detail: "Upwork", href: site.links.upwork },
];

const principles = [
  {
    kicker: "01 / Production",
    title: "It ships or it isn't finished.",
    body: "A model that only runs in a notebook hasn't been built yet. I take the work to the point where it has an endpoint, a container and traffic that isn't mine.",
  },
  {
    kicker: "02 / Evidence",
    title: "Measure it, don't claim it.",
    body: "Tracked experiments, versioned data, a result you can reproduce from the repository. If a number can't be checked, it doesn't get said out loud.",
  },
  {
    kicker: "03 / Data",
    title: "Keep the data where it belongs.",
    body: "Local models through Ollama, on-premise inference and federated setups exist for a reason. When the data can't leave, the model comes to it.",
  },
  {
    kicker: "04 / Restraint",
    title: "The smallest model that works.",
    body: "The useful question is rarely which model is biggest. It's which one is small enough to run at the latency and cost the system actually has.",
  },
] as const;

const stack = [
  {
    discipline: "Agentic AI",
    tools: ["LangGraph", "Pydantic AI", "MCP", "Multi-agent systems", "Voice agents", "n8n"],
  },
  {
    discipline: "LLMs & Generative AI",
    tools: ["OpenAI", "Claude", "Gemini", "Hugging Face", "Ollama", "Groq", "DeepSeek", "LangChain"],
  },
  {
    discipline: "RAG & NLP",
    tools: ["Vector databases", "Neo4j knowledge graphs", "Transformers", "Federated learning"],
  },
  {
    discipline: "Computer Vision",
    tools: ["YOLOv11", "Ultralytics", "OpenCV", "MediaPipe", "CNNs", "Vision Transformers"],
  },
  {
    discipline: "Machine Learning",
    tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Python"],
  },
  {
    discipline: "MLOps & Cloud",
    tools: ["Docker", "AWS", "DVC", "MLflow", "CI/CD", "PostgreSQL"],
  },
  {
    discipline: "Full Stack",
    tools: ["Next.js", "React", "TypeScript", "FastAPI", "Tailwind CSS", "Flask", "Django"],
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Opening ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[88rem] px-6 pt-32 lg:px-12 lg:pt-40">
        <p className="label">About</p>

        <SplitHeading
          as="h1"
          immediate
          delay={0.1}
          text="Ali Hassan, an AI Engineer who ships past the notebook."
          className="d-1 mt-6 max-w-5xl font-display font-bold text-ink"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal stagger className="max-w-3xl lg:col-span-7">
            <p className="lede">
              I&apos;m an AI Engineer and Data Scientist working from Lahore,
              Punjab. Most of my week goes into agentic systems: agents that
              hold tools, hand work to each other and stay inside a latency
              budget. Right now that includes agentic voice chat agents, where
              the model has to listen, reason and answer inside a single turn.
            </p>
            <p className="lede mt-7">
              The public record sits under{" "}
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="link-quiet text-ink"
              >
                {site.handle}
              </a>{" "}
              carries 150 repositories and 298 stars. The work spans multi-agent
              systems and voice agents built on LangGraph, Pydantic AI, MCP and
              local models through Ollama; retrieval-augmented generation,
              including federated and knowledge-graph RAG; computer vision, with
              YOLOv11 models for emotion, sign language, workplace safety and
              security; AI automation through n8n; and the MLOps that keeps any
              of it honest: Docker, AWS, DVC, CI/CD, experiment tracking.
            </p>
            <p className="lede mt-7">
              The most-starred piece is a YOLOv11 face emotion detector at 31
              stars, with smoking detection at 26, a self-driving steering model
              at 20 and 40-class sign language recognition at 12 behind it. I
              write mostly Python (72 of those repositories are Jupyter
              notebooks, 33 are Python), plus TypeScript when an AI product
              needs a front end people will actually use. Client work runs
              through Upwork, and what I hand over is a running system.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <Image
              src="/image.jpeg"
              alt="Ali Hassan, AI Engineer and Data Scientist, photographed in Lahore, Pakistan"
              width={1040}
              height={1092}
              priority
              sizes="(max-width: 1024px) 90vw, 22rem"
              className="aspect-[4/5] w-full rounded-xl bg-oat object-cover object-[58%_15%]"
            />

            <dl className="mt-9">
              {facts.map((fact) => (
                <div
                  key={fact.term}
                  className="hairline flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
                >
                  <dt className="label">{fact.term}</dt>
                  <dd className="font-mono text-[0.78rem] tracking-tight text-ink-soft">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-quiet text-ink"
                      >
                        {fact.detail}
                      </a>
                    ) : (
                      fact.detail
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── How I work ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12 lg:py-28">
        <Reveal>
          <p className="label">How I work</p>
          <h2 className="d-2 mt-5 max-w-3xl font-display font-bold text-ink">
            Four rules that decide what I build and what I refuse to.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.kicker}
              className="rounded-2xl bg-oat p-9 lg:p-11"
            >
              <p className="label text-pine">{principle.kicker}</p>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink lg:text-3xl">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                {principle.body}
              </p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* ── Stack ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12 lg:py-28">
        <Reveal>
          <p className="label">Stack</p>
          <h2 className="d-2 mt-5 max-w-3xl font-display font-bold text-ink">
            What I reach for, grouped by the problem it solves.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14">
          {stack.map((group) => (
            <div
              key={group.discipline}
              className="hairline grid gap-4 py-8 md:grid-cols-12 md:gap-10 lg:py-10"
            >
              <h3 className="font-display text-xl font-bold tracking-tight text-ink md:col-span-4 lg:text-2xl">
                {group.discipline}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2.5 md:col-span-8">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="font-mono text-[0.82rem] tracking-tight text-ink-soft"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── Closing ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[88rem] px-6 pb-24 lg:px-12 lg:pb-32">
        <Reveal className="rounded-2xl bg-oat px-8 py-16 text-center lg:px-16 lg:py-24">
          <h2 className="d-2 mx-auto max-w-3xl font-display font-bold text-ink">
            If it has to run, not just demo, let&apos;s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-soft">
            Tell me what the system has to do and where it has to run, and
            I&apos;ll tell you what it takes to get there.
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
