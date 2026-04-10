const projects = [
  {
    week: 1,
    title: "AI Portfolio Site",
    description: "This site — a responsive developer portfolio built with Next.js 15, Tailwind CSS, and deployed on Vercel.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    status: "live" as const,
    repo: "https://github.com/kanishksingh01/ai-portfolio-site",
  },
  {
    week: 2,
    title: "AI Data Dashboard",
    description: "Interactive data visualization dashboard with AI-powered insights and real-time charts.",
    tags: ["Next.js", "Charts", "AI"],
    status: "upcoming" as const,
  },
  {
    week: 3,
    title: "Cybersecurity Scanner",
    description: "Web vulnerability scanner with automated reporting and remediation suggestions.",
    tags: ["Security", "Scanning", "Reports"],
    status: "upcoming" as const,
  },
  {
    week: 4,
    title: "Skills & MCP Dashboard",
    description: "Dashboard for managing AI model capabilities, skills, and MCP server integrations.",
    tags: ["MCP", "Dashboard", "AI"],
    status: "upcoming" as const,
  },
  {
    week: 5,
    title: "IaC Generator",
    description: "Natural language to Terraform — generate infrastructure-as-code from plain English descriptions.",
    tags: ["Terraform", "NLP", "IaC"],
    status: "upcoming" as const,
  },
  {
    week: 6,
    title: "RAG Knowledge Base",
    description: "Retrieval-augmented generation system for querying documentation and knowledge bases.",
    tags: ["RAG", "Embeddings", "Search"],
    status: "upcoming" as const,
  },
  {
    week: 7,
    title: "Changelog Generator",
    description: "Automated changelog generation from git history with AI-powered summaries.",
    tags: ["Git", "Automation", "AI"],
    status: "upcoming" as const,
  },
  {
    week: 8,
    title: "CLI Tool",
    description: "Published npm CLI package for DevOps workflow automation.",
    tags: ["CLI", "npm", "Node.js"],
    status: "upcoming" as const,
  },
  {
    week: 9,
    title: "Multi-Model Arena",
    description: "Compare outputs from multiple AI models side-by-side with evaluation metrics.",
    tags: ["LLMs", "Comparison", "Eval"],
    status: "upcoming" as const,
  },
  {
    week: 10,
    title: "DevOps Incident Dashboard",
    description: "Real-time incident tracking and management dashboard for SRE teams.",
    tags: ["Incidents", "SRE", "Monitoring"],
    status: "upcoming" as const,
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 font-mono text-sm text-emerald-400">Projects</h2>
        <h3 className="mb-10 text-3xl font-bold">10 Weeks, 10 Projects</h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.week}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/[.02] p-6 transition-colors hover:border-emerald-400/30 hover:bg-white/[.04]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">
                  Week {project.week}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    project.status === "live"
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {project.status === "live" ? "Live" : "Upcoming"}
                </span>
              </div>
              <h4 className="mb-2 text-lg font-semibold">{project.title}</h4>
              <p className="mb-4 flex-1 text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-white/[.06] px-2 py-0.5 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-emerald-300"
                >
                  View Source &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
