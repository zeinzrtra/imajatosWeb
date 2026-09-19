"use client";

import { useEffect } from "react";

type MotionGroup = {
  selector: string;
  from: Keyframe;
  duration?: number;
  stagger?: number;
};

const entranceGroups: MotionGroup[] = [
  { selector: ".focus-heading, .about-editorial > div:first-child, .collaboration-copy, .contact-layout > aside", from: { opacity: 0, transform: "translate3d(-20px, 12px, 0)" }, duration: 900 },
  { selector: ".focus-card, .quote-card, .form-card", from: { opacity: 0, transform: "translate3d(18px, 18px, 0) scale(.985)" }, duration: 880, stagger: 110 },
  { selector: ".collective-statement, .landing-intro-row, .section-heading-row, .gallery-summary, .video-banner", from: { opacity: 0, transform: "translate3d(0, 22px, 0)" }, duration: 920 },
  { selector: ".structure-group, .program-flow", from: { opacity: 0, transform: "translate3d(0, 20px, 0) scale(.988)" }, duration: 960, stagger: 120 },
  { selector: ".program-card", from: { opacity: 0, transform: "translate3d(0, 24px, 0) scale(.99)" }, duration: 820, stagger: 90 },
  { selector: ".gallery-grid figure", from: { opacity: 0, transform: "translate3d(0, 20px, 0) scale(.975)" }, duration: 900, stagger: 85 },
  { selector: ".partner-steps li, .contact-list > div, .instagram-card", from: { opacity: 0, transform: "translate3d(14px, 8px, 0)" }, duration: 760, stagger: 80 },
];

const easing = "cubic-bezier(.16, 1, .3, 1)";

export function LandingMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const started = new Set<HTMLElement>();
    const specs = new Map<HTMLElement, { from: Keyframe; duration: number; delay: number }>();

    entranceGroups.forEach(({ selector, from, duration = 620, stagger = 0 }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        specs.set(element, { from, duration, delay: stagger ? (index % 4) * stagger : 0 });
      });
    });

    const play = (element: HTMLElement, from: Keyframe, duration: number, delay = 0) => {
      if (started.has(element)) return;
      started.add(element);
      element.style.willChange = "transform, opacity";
      const finalTransform = getComputedStyle(element).transform;
      const animation = element.animate(
        [from, { opacity: 1, transform: finalTransform === "none" ? "translate3d(0, 0, 0)" : finalTransform }],
        { duration, delay, easing, fill: "backwards" },
      );
      const clearHint = () => {
        element.style.removeProperty("will-change");
      };
      animation.finished.then(clearHint, clearHint);
    };

    const heroItems = document.querySelectorAll<HTMLElement>(
      ".hero-kicker, .hero h1, .hero-content > p, .hero-actions, .hero-principles",
    );
    heroItems.forEach((element, index) => {
      play(element, { opacity: 0, transform: "translate3d(0, 20px, 0)" }, 880, 100 + index * 105);
    });

    const ribbon = document.querySelector<HTMLElement>(".identity-ribbon");
    if (ribbon) play(ribbon, { opacity: 0, transform: "translate3d(-2%, 8px, 0) rotate(-.7deg)" }, 920, 520);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const spec = specs.get(element);
        if (spec) play(element, spec.from, spec.duration, spec.delay);
        observer.unobserve(element);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    specs.forEach((_, element) => observer.observe(element));

    return () => {
      observer.disconnect();
      started.forEach((element) => {
        element.getAnimations().forEach((animation) => animation.cancel());
        element.style.removeProperty("will-change");
      });
    };
  }, []);

  return null;
}
