"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Seconds of delay before this element starts. */
  delay?: number;
  /** Stagger direct children instead of moving the element as one block. */
  stagger?: boolean;
};

/** Scroll-triggered rise. The default state lives in JS so no-JS renders visible. */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  stagger = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = stagger ? Array.from(el.children) : el;

      gsap.from(targets, {
        y: 26,
        autoAlpha: 0,
        duration: 1,
        delay,
        ease: "expo.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
