"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    week: 1,
    title: "AI Portfolio Site",
    description:
      "This site — a responsive developer portfolio built with Next.js 15, Tailwind CSS, and deployed on Vercel.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    status: "live" as const,
    url: "https://ai-portfolio-site-psi.vercel.app",
    repo: "https://github.com/kanishksingh01/ai-portfolio-site",
  },
  {
    week: 2,
    title: "Claude Skills Ranking Dashboard",
    description:
      "Ranks Claude Code skill repos from GitHub by usefulness and 90-day star momentum. Each card links straight to source.",
    tags: ["Next.js", "GitHub API", "ISR"],
    status: "live" as const,
    url: "https://claude-skills-dashboard.vercel.app",
    repo: "https://github.com/kanishksingh01/claude-skills-dashboard",
  },
  {
    week: 3,
    title: "CyberScan — Local Security Scanner",
    description:
      "Scans your local machine for open ports, SSH misconfig, firewall gaps, pending updates, risky services, and file permission issues. Scores 0–100.",
    tags: ["Security", "Node.js", "Linux"],
    status: "live" as const,
    url: "https://cybersecurity-scanner-khaki.vercel.app",
    repo: "https://github.com/kanishksingh01/cybersecurity-scanner",
  },
  {
    week: 4,
    title: "AI Ecosystem Radar",
    description:
      "GitHub's trending page shows one category at a time. This aggregates six AI topic categories simultaneously, deduplicates, and surfaces what's actually moving.",
    tags: ["Next.js", "GitHub API", "Recharts"],
    status: "live" as const,
    url: "https://ai-data-dashboard-two.vercel.app",
    repo: "https://github.com/kanishksingh01/ai-data-dashboard",
  },
  {
    week: 5,
    title: "IaC Generator",
    description:
      "Type plain English. Get production-ready Terraform for AWS, GCP, or Azure — broken down into root module plus child modules. Runs 100% locally via Ollama.",
    tags: ["Terraform", "Ollama", "Multi-Cloud"],
    status: "live" as const,
    url: "https://iac-generator.vercel.app",
    repo: "https://github.com/kanishksingh01/iac-generator",
  },
  {
    week: 6,
    title: "RAG Knowledge Base",
    description:
      "Retrieval-augmented generation system for querying documentation and knowledge bases.",
    tags: ["RAG", "Embeddings", "Search"],
    status: "upcoming" as const,
  },
  {
    week: 7,
    title: "Changelog Generator",
    description:
      "Automated changelog generation from git history with AI-powered summaries.",
    tags: ["Git", "Automation", "AI"],
    status: "upcoming" as const,
  },
  {
    week: 8,
    title: "CLI Tool",
    description:
      "Published npm CLI package for DevOps workflow automation.",
    tags: ["CLI", "npm", "Node.js"],
    status: "upcoming" as const,
  },
  {
    week: 9,
    title: "Multi-Model Arena",
    description:
      "Compare outputs from multiple AI models side-by-side with evaluation metrics.",
    tags: ["LLMs", "Comparison", "Eval"],
    status: "upcoming" as const,
  },
  {
    week: 10,
    title: "DevOps Incident Dashboard",
    description:
      "Real-time incident tracking and management dashboard for SRE teams.",
    tags: ["Incidents", "SRE", "Monitoring"],
    status: "upcoming" as const,
  },
];

export function Projects() {
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="border-t border-white/[.06] px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <h2
          className={`mb-2 font-mono text-base tracking-wide text-green-400 glow-green ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Projects
        </h2>
        <h3
          className={`mb-12 text-3xl font-bold gradient-text ${
            visible ? "animate-fade-in-up stagger-1" : "opacity-0"
          }`}
        >
          10 Weeks, 10 Projects
        </h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.week}
              className={`card-glow group flex flex-col rounded-xl border bg-slate-800/20 p-6 ${
                project.status === "live"
                  ? "border-green-500/20"
                  : "border-white/[.06]"
              } ${
                visible
                  ? `animate-fade-in-up stagger-${Math.min(i + 1, 10)}`
                  : "opacity-0"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">
                  Week {String(project.week).padStart(2, "0")}
                </span>
                {project.status === "live" ? (
                  <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                    <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                    Live
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-500">
                    Upcoming
                  </span>
                )}
              </div>
              <h4 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-white transition-colors duration-200">
                {project.title}
              </h4>
              <p className="mb-5 flex-1 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/[.04] bg-slate-800/50 px-2.5 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {"url" in project && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center gap-1 text-sm font-medium text-green-400 transition-colors duration-200 hover:text-green-300"
                  >
                    View Live
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-slate-300"
                  >
                    Source
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
