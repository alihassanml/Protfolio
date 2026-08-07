"use client";

import { useRef, type ElementType } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  /** Play immediately on mount instead of waiting for scroll. */
  immediate?: boolean;
  delay?: number;
};

/** Lines rise out of a mask, one after the other. */
export default function SplitHeading({
  text,
  className,
  as: Tag = "h2",
  immediate = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const split = new SplitText(el, {
        type: "lines",
        linesClass: "split-line",
        mask: "lines",
      });

      gsap.from(split.lines, {
        yPercent: 115,
        duration: 1.25,
        ease: "expo.out",
        stagger: 0.09,
        delay,
        scrollTrigger: immediate
          ? undefined
          : { trigger: el, start: "top 90%", once: true },
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [text] },
  );

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
