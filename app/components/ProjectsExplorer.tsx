"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "@/app/components/ProjectCard";
import { categories, projects, type Category } from "@/lib/projects";

gsap.registerPlugin(useGSAP);

type Filter = Category | "All";

const filters: Filter[] = ["All", ...categories];

/** Category filter over the full project index. Cards re-enter on every change. */
export default function ProjectsExplorer() {
  const [active, setActive] = useState<Filter>("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".project-item",
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.04,
          overwrite: true,
        },
      );
    },
    { scope: gridRef, dependencies: [active] },
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by focus area"
        className="flex flex-wrap items-center gap-2.5"
      >
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                isActive
                  ? "bg-ink text-paper"
                  : "bg-oat text-ink-soft hover:bg-oat-deep"
              }`}
            >
              {filter}
              {filter === "All" && (
                <span
                  aria-hidden
                  className={`ml-2 ${isActive ? "text-paper/55" : "text-ink-mute"}`}
                >
                  {projects.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {`Showing ${visible.length} of ${projects.length} projects.`}
      </p>

      <div
        ref={gridRef}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project) => (
          <div key={project.slug} className="project-item">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
