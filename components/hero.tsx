export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
      <p className="mb-4 font-mono text-sm text-emerald-400">Hi, my name is</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
        Kanishk Singh
      </h1>
      <h2 className="mb-6 text-xl text-zinc-400 sm:text-2xl">
        DevOps Engineer &amp; SRE
      </h2>
      <p className="mb-10 max-w-xl text-zinc-500">
        Building production-grade AI-powered tools over 10 weeks. Focused on
        infrastructure automation, observability, and cloud-native systems.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-emerald-400"
        >
          View Projects
        </a>
        <a
          href="https://github.com/kanishksingh01"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
