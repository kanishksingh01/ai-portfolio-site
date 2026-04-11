export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-28 text-center sm:py-36 hero-gradient overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,250,252,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative">
        <p className="mb-5 font-mono text-base tracking-wide text-green-400 glow-green animate-fade-in-up sm:text-lg">
          Hi, my name is
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight gradient-text sm:text-7xl animate-fade-in-up stagger-1">
          Kanishk Singh
        </h1>
        <h2 className="mb-6 text-xl text-slate-400 sm:text-2xl animate-fade-in-up stagger-2">
          DevOps Engineer &amp; SRE
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-slate-500 leading-relaxed animate-fade-in-up stagger-3">
          Building production-grade AI-powered tools over 10 weeks. Focused on
          infrastructure automation, observability, and cloud-native systems.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-up stagger-4">
          <a
            href="#projects"
            className="cursor-pointer rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
          >
            View Projects
          </a>
          <a
            href="https://github.com/kanishksingh01"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-white/[.03]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
