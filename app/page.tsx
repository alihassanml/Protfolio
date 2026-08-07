import Link from "next/link";
import type { Metadata } from "next";
import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
import SplitHeading from "./components/SplitHeading";
import ProjectCard from "./components/ProjectCard";
import { featured, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ali Hassan — AI Engineer & Data Scientist | alihassanml",
  description:
    "Ali Hassan (alihassanml) is an AI Engineer in Lahore, Pakistan, building agentic AI systems, voice agents, RAG pipelines and computer vision models.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ali Hassan — AI Engineer & Data Scientist",
    description:
      "Agentic AI, voice agents, RAG and computer vision systems, built and shipped by Ali Hassan in Lahore, Pakistan.",
    url: site.url,
    type: "website",
  },
};

const capabilities = [
  {
    kicker: "Agents",
    title: "Systems that decide",
    body: "Multi-agent architectures with real tool use, hand-off between specialists, and a latency and cost budget that survives production traffic.",
    proof: "LangGraph \u00b7 Pydantic AI \u00b7 MCP \u00b7 OpenAI \u00b7 Claude \u00b7 Gemini",
  },
  {
    kicker: "Voice",
    title: "Systems that talk",
    body: "Agentic voice assistants that listen, reason and answer inside a turn. Live transcription, tool calls mid-conversation, speech back without the wait.",
    proof: "AssemblyAI \u00b7 ElevenLabs \u00b7 DeepSeek \u00b7 Realtime APIs",
  },
  {
    kicker: "Language",
    title: "Systems that read",
    body: "Retrieval over private documents, knowledge graphs where relationships matter, and federated setups for data that is not allowed to move.",
    proof: "LangChain \u00b7 Vector databases \u00b7 Neo4j \u00b7 Hugging Face",
  },
  {
    kicker: "Vision",
    title: "Systems that see",
    body: "Detection and recognition models trained on custom footage, then wrapped in a streaming inference service the camera can actually feed.",
    proof: "YOLOv11 \u00b7 Ultralytics \u00b7 OpenCV \u00b7 MediaPipe",
  },
];

export default function Page() {
  return (
    <>
      <Hero />

      {/* Thesis */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="label">What I actually do</p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <SplitHeading
              as="h2"
              text="A model in a notebook is a result. A model behind an endpoint, under load, with a fallback path, is a product."
              className="d-2 max-w-4xl font-display font-bold text-ink"
            />
            <Reveal>
              <p className="lede mt-8 max-w-2xl">
                Most of my work is the distance between those two things:
                labelling the data properly, choosing the smallest model that
                clears the bar, and building the service around it that a team
                can run without me.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-[88rem] px-6 pb-20 lg:px-12 lg:pb-28">
        <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <article
              key={cap.kicker}
              className="flex flex-col rounded-2xl bg-oat p-9"
            >
              <p className="label text-pine">{cap.kicker}</p>
              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink">
                {cap.title}
              </h3>
              <p className="mt-4 flex-grow text-ink-soft">{cap.body}</p>
              <p className="mt-8 font-mono text-[0.7rem] leading-relaxed text-ink-mute">
                {cap.proof}
              </p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Selected work */}
      <section
        className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12 lg:py-28"
        aria-labelledby="work-heading"
      >
        <div className="hairline flex flex-wrap items-end justify-between gap-6 pt-8">
          <div>
            <Reveal>
              <p className="label">Selected work</p>
            </Reveal>
            <SplitHeading
              as="h2"
              text="Six that people kept using"
              className="d-1 mt-5 font-display font-bold text-ink"
            />
          </div>
          <Reveal>
            <Link
              href="/projects"
              className="link-quiet font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink"
            >
              All {projects.length} projects
            </Link>
          </Reveal>
        </div>

        <Reveal
          stagger
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>
      </section>

      {/* Close */}
      <section className="mx-auto max-w-[88rem] px-6 pb-24 lg:px-12 lg:pb-32">
        <Reveal className="rounded-2xl bg-oat px-8 py-16 lg:px-16 lg:py-24">
          <p className="label">Available for work</p>
          <h2 className="d-1 mt-5 max-w-3xl font-display font-bold text-ink">
            Tell me what the model has to get right.
          </h2>
          <p className="lede mt-6 max-w-xl">
            Send the problem, the data you have, and the deadline. You will get
            a straight answer about whether AI is the right tool for it.
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
