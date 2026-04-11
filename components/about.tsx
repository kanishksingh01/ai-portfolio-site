"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Cloud & Infra",
    items: ["AWS", "Oracle Cloud", "Terraform", "Docker", "Kubernetes"],
  },
  {
    category: "DevOps & SRE",
    items: ["CI/CD", "GitHub Actions", "Monitoring", "Incident Response", "Linux"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Bash", "Go"],
  },
  {
    category: "AI & Tools",
    items: ["Claude Code", "LLM APIs", "RAG", "Prompt Engineering"],
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="border-t border-white/[.06] px-6 py-24">
      <div ref={ref} className="mx-auto max-w-4xl">
        <h2
          className={`mb-2 font-mono text-base tracking-wide text-green-400 glow-green ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          About
        </h2>
        <h3
          className={`mb-8 text-3xl font-bold gradient-text ${
            visible ? "animate-fade-in-up stagger-1" : "opacity-0"
          }`}
        >
          Who I Am
        </h3>
        <p
          className={`mb-12 max-w-2xl text-slate-400 leading-relaxed ${
            visible ? "animate-fade-in-up stagger-2" : "opacity-0"
          }`}
        >
          I&apos;m a DevOps engineer and aspiring SRE based in the Boston area. I
          specialize in building reliable infrastructure, automating
          deployments, and integrating AI into operations workflows. This
          portfolio showcases 10 projects built over 10 weeks, each
          demonstrating a different facet of modern DevOps and AI engineering.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`card-glow rounded-xl border border-white/[.06] bg-slate-800/30 p-6 ${
                visible
                  ? `animate-fade-in-up stagger-${i + 3}`
                  : "opacity-0"
              }`}
            >
              <h4 className="mb-4 text-sm font-semibold text-green-400">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[.06] bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
