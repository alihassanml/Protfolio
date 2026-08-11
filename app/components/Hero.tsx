"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site, stats } from "@/lib/site";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from("[data-anim='eyebrow']", { yPercent: 100, opacity: 0, duration: 0.9 })
        .from(
          "[data-anim='line']",
          { yPercent: 108, duration: 1.35, stagger: 0.11 },
          0.12,
        )
        .from(
          "[data-anim='frame']",
          { clipPath: "inset(0% 0% 100% 0%)", duration: 1.3 },
          0.4,
        )
        .fromTo(
          "[data-anim='scan']",
          { yPercent: -100, opacity: 1 },
          { yPercent: 1100, duration: 1.5, ease: "power2.inOut", opacity: 0 },
          0.55,
        )
        .from(
          "[data-anim='intro'] > *",
          { y: 20, opacity: 0, duration: 1, stagger: 0.09 },
          0.7,
        )
        .from(
          "[data-anim='stat']",
          { y: 18, opacity: 0, duration: 0.9, stagger: 0.07 },
          1.05,
        );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="mx-auto max-w-[88rem] px-6 pb-16 pt-32 lg:px-12 lg:pb-20 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Type block */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden">
            <p data-anim="eyebrow" className="label">
              AI Engineer · {site.location} · Open for work
            </p>
          </div>

          <h1 id="hero-heading" className="d-hero mt-6 font-display font-bold">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-anim="line" className="block whitespace-nowrap text-ink">
                Ali Hassan
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-anim="line" className="block whitespace-nowrap text-pine">
                AI Engineer
              </span>
            </span>
          </h1>

          <div data-anim="intro" className="mt-10 max-w-xl">
            <p className="lede">
              I build agentic AI systems, voice agents, RAG pipelines and
              computer vision models. Trained, deployed and left running in
              production. 150 repositories of it, in the open.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-ink px-7 py-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-pine"
              >
                See the work
              </Link>
              <Link
                href="/contact"
                className="link-quiet font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="mx-auto w-full max-w-[26rem] lg:ml-auto lg:mr-0 lg:max-w-[34rem]">
            <div
              data-anim="frame"
              className="relative aspect-square overflow-hidden rounded-xl bg-oat"
            >
              <Image
                src="/image.jpeg"
                alt="Ali Hassan, AI Engineer and Data Scientist based in Lahore, Pakistan"
                width={1040}
                height={1092}
                priority
                sizes="(max-width: 1024px) 92vw, 34rem"
                className="h-full w-full object-cover object-[58%_20%]"
              />
              <span
                data-anim="scan"
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-pine/70 opacity-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Evidence strip */}
      <dl className="hairline mt-20 grid grid-cols-2 gap-y-8 pt-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            data-anim="stat"
            className="flex flex-col-reverse items-start gap-2"
          >
            <dt className="label">{stat.label}</dt>
            <dd className="font-display text-4xl font-bold tracking-tight text-ink lg:text-5xl">
              {stat.value}
              {stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
