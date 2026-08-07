import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import SplitHeading from "@/app/components/SplitHeading";
import { site } from "@/lib/site";

const pageUrl = `${site.url}/services`;

const description =
  "Hire Ali Hassan (alihassanml), an AI Engineer in Lahore, Pakistan, for agentic AI, voice agents, RAG, computer vision and MLOps. Freelance and contract.";

export const metadata: Metadata = {
  title: "AI Engineering Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Engineering Services — Ali Hassan",
    description,
    url: pageUrl,
    type: "website",
  },
};

/** Service graph — tells search engines what is on offer and who provides it. */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${pageUrl}#service`,
  name: "AI Engineering Services — Ali Hassan",
  url: pageUrl,
  description,
  areaServed: "Worldwide",
  availableLanguage: "English",
  serviceType: [
    "Agentic AI and multi-agent systems",
    "AI voice agents",
    "RAG and document intelligence",
    "Computer vision systems",
    "MLOps and deployment",
    "AI product engineering",
    "AI automation",
    "Machine learning consulting",
  ],
  provider: {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    alternateName: site.handle,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: [site.links.github, site.links.linkedin, site.links.upwork],
  },
};

const primaryButton =
  "rounded-full bg-ink px-7 py-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-pine";

const secondaryButton =
  "link-quiet font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink";

const services = [
  {
    kicker: "LLM & agents",
    title: "Agentic AI & multi-agent systems",
    body: "I build agents that use tools, call your APIs and pass work between each other, rather than one prompt trying to do everything. That includes MCP servers and the evaluation you need to know an agent is behaving.",
    deliverables:
      "agent architecture, LangGraph orchestration, tool integrations, evaluation harness, cost and latency budget",
  },
  {
    kicker: "Voice AI",
    title: "Agentic voice chat agents",
    body: "Voice assistants that listen, reason and answer inside a single turn, with tool calls happening mid-conversation. Built for support lines, booking flows and hands-free interfaces.",
    deliverables:
      "realtime speech pipeline, agent logic, telephony or web integration, latency budget, call transcripts",
  },
  {
    kicker: "Retrieval",
    title: "RAG & document intelligence",
    body: "I make private corpora answerable — contracts, tickets, manuals, research — with retrieval that gets measured rather than assumed. Where the data cannot leave its environment, I build knowledge graphs and federated setups that query it in place.",
    deliverables:
      "ingestion pipeline, vector or graph store, retrieval evaluation, answer API",
  },
  {
    kicker: "Computer vision",
    title: "Computer vision systems",
    body: "I train detection and classification models on your own footage — YOLOv11 and custom architectures — and wrap them in pipelines that read live video without falling behind. That covers RTSP streams, edge devices and batch runs over recorded archives.",
    deliverables:
      "dataset labelling strategy, trained model weights, evaluation report, FastAPI inference service, deployment",
  },
  {
    kicker: "MLOps",
    title: "MLOps & deployment",
    body: "Most models stall between a working notebook and something a team can actually run. I containerise training and inference, track every experiment, and wire up the CI/CD and monitoring that let the next version ship without a rewrite.",
    deliverables:
      "Docker images, AWS deployment, CI/CD, DVC and MLflow experiment tracking, monitoring, reproducible pipelines",
  },
  {
    kicker: "Product engineering",
    title: "AI product engineering",
    body: "The model is rarely the whole job — someone still has to log in, upload a file and read a result they trust. I build the application around the model, front to back, so you ship one thing instead of coordinating three contractors.",
    deliverables:
      "Next.js or React front end, FastAPI backend, PostgreSQL, auth, dashboards, hosting",
  },
];

const engagement = [
  {
    step: "01",
    title: "Scope call",
    body: "Thirty minutes to define the problem, look at the data you already hold, and agree what success will be measured against.",
  },
  {
    step: "02",
    title: "Proposal",
    body: "A written approach with milestones and a fixed timeline, so you know what arrives and when before any work begins.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demos running against your real data, so corrections happen in week two rather than at handover.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Code, model weights, documentation and a running deployment in your own accounts, with a walkthrough of how to operate it.",
  },
];

const formats = [
  {
    tag: "Fixed scope",
    name: "Project",
    body: "A defined build with an agreed scope, a fixed price and a delivery date — the right shape when you already know what needs to exist.",
  },
  {
    tag: "Ongoing",
    name: "Retainer",
    body: "A recurring block of my time for teams with models already running, covering retraining, new capability and the things that break.",
  },
  {
    tag: "Advisory",
    name: "Consulting",
    body: "A short engagement to review an existing architecture, choose between approaches, and give your team a direction it can build on.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Opening */}
      <section className="mx-auto max-w-[88rem] px-6 pt-32 lg:px-12 lg:pt-40">
        <p className="label">Services · Freelance & contract</p>

        <SplitHeading
          as="h1"
          immediate
          text="AI engineering that ends in a deployed system, not a demo."
          className="d-1 mt-6 max-w-4xl font-display font-bold text-ink"
        />

        <Reveal className="mt-9 max-w-2xl" delay={0.35}>
          <p className="lede">
            I am {site.name}, an AI Engineer working from {site.location} with
            teams anywhere. My work starts where the research paper stops: a
            model trained on your real data, wrapped in a service, running where
            your users are.
          </p>

          <div className="mt-10">
            <Link href="/contact" className={primaryButton}>
              Start a project
            </Link>
          </div>
        </Reveal>
      </section>

      {/* The five services */}
      <section
        aria-labelledby="services-heading"
        className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12 lg:py-28"
      >
        <Reveal>
          <p className="label">What I build</p>
          <h2
            id="services-heading"
            className="d-2 mt-5 max-w-3xl font-display font-bold text-ink"
          >
            Six disciplines, one engineer accountable for all of them.
          </h2>
        </Reveal>

        <div className="mt-14 lg:mt-20">
          {services.map((service) => (
            <Reveal
              key={service.title}
              className="hairline grid gap-6 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
            >
              <div className="lg:col-span-4">
                <p className="label text-pine">{service.kicker}</p>
                <h3 className="d-3 mt-4 font-display font-bold text-ink">
                  {service.title}
                </h3>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-ink-soft">{service.body}</p>
                <p className="mt-7 font-mono text-[0.72rem] leading-[1.9] text-ink-mute">
                  <span className="uppercase tracking-[0.16em] text-ink">
                    Deliverables{" "}
                  </span>
                  {service.deliverables}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How an engagement runs */}
      <section
        aria-labelledby="engagement-heading"
        className="mx-auto max-w-[88rem] px-6 pb-20 lg:px-12 lg:pb-28"
      >
        <Reveal>
          <p className="label">How it works</p>
          <h2
            id="engagement-heading"
            className="d-2 mt-5 max-w-3xl font-display font-bold text-ink"
          >
            How an engagement runs.
          </h2>
        </Reveal>

        <div className="mt-14 lg:mt-16">
          {engagement.map((phase) => (
            <Reveal
              key={phase.step}
              className="hairline grid gap-3 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10"
            >
              <p className="font-mono text-[0.72rem] font-medium tracking-[0.16em] text-pine lg:col-span-1">
                {phase.step}
              </p>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink lg:col-span-3 lg:text-2xl">
                {phase.title}
              </h3>
              <p className="text-ink-soft lg:col-span-7 lg:col-start-6">
                {phase.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Engagement formats */}
      <section
        aria-labelledby="formats-heading"
        className="mx-auto max-w-[88rem] px-6 pb-20 lg:px-12 lg:pb-28"
      >
        <Reveal>
          <p className="label">Ways to work together</p>
          <h2
            id="formats-heading"
            className="d-2 mt-5 max-w-3xl font-display font-bold text-ink"
          >
            Three formats. Pick whichever fits the work.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {formats.map((format) => (
            <div key={format.name} className="rounded-2xl bg-oat p-8 lg:p-10">
              <p className="label text-pine">{format.tag}</p>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
                {format.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {format.body}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-[88rem] px-6 pb-24 lg:px-12 lg:pb-32">
        <Reveal className="rounded-2xl bg-oat px-8 py-16 lg:px-16 lg:py-20">
          <p className="label">Next step</p>
          <h2 className="d-2 mt-5 max-w-3xl font-display font-bold text-ink">
            Tell me what you are trying to build.
          </h2>
          <p className="lede mt-6 max-w-2xl">
            If it involves a camera feed, a model that never left the notebook
            or a pile of documents nobody can search, it is close to something I
            have built before.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href="/contact" className={primaryButton}>
              Start a project
            </Link>
            <a
              href={site.links.calendly}
              target="_blank"
              rel="noreferrer"
              className={secondaryButton}
            >
              Book a 30-minute call
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
