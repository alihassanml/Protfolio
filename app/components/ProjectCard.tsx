import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-2xl bg-oat p-8 transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:bg-oat-deep"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="label text-pine">{project.category}</span>
        <ArrowUpRight
          size={18}
          strokeWidth={1.75}
          className="shrink-0 text-ink-mute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pine"
          aria-hidden
        />
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
        {project.title}
      </h3>

      <p className="mt-3 flex-grow text-[0.95rem] leading-relaxed text-ink-soft">
        {project.blurb}
      </p>

      {project.metric && (
        <p className="mt-6 font-mono text-xs font-medium tracking-tight text-pine">
          {project.metric}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[0.7rem] text-ink-mute">
            {tech}
          </span>
        ))}
        {project.stars > 0 && (
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.7rem] text-ink-mute">
            <Star size={12} strokeWidth={2} aria-hidden />
            {project.stars}
          </span>
        )}
      </div>
    </a>
  );
}
