const skills = [
  { category: "Cloud & Infra", items: ["AWS", "Oracle Cloud", "Terraform", "Docker", "Kubernetes"] },
  { category: "DevOps & SRE", items: ["CI/CD", "GitHub Actions", "Monitoring", "Incident Response", "Linux"] },
  { category: "Languages", items: ["Python", "TypeScript", "Bash", "Go"] },
  { category: "AI & Tools", items: ["Claude Code", "LLM APIs", "RAG", "Prompt Engineering"] },
];

export function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 font-mono text-sm text-emerald-400">About</h2>
        <h3 className="mb-8 text-3xl font-bold">Who I Am</h3>
        <p className="mb-10 max-w-2xl text-zinc-400 leading-relaxed">
          I&apos;m a DevOps engineer and aspiring SRE based in the Boston area. I
          specialize in building reliable infrastructure, automating
          deployments, and integrating AI into operations workflows. This
          portfolio showcases 10 projects built over 10 weeks, each
          demonstrating a different facet of modern DevOps and AI engineering.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-white/10 bg-white/[.02] p-6"
            >
              <h4 className="mb-3 text-sm font-semibold text-emerald-400">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white/[.06] px-3 py-1 text-sm text-zinc-300"
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
