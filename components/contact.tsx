export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 font-mono text-sm text-emerald-400">Contact</h2>
        <h3 className="mb-6 text-3xl font-bold">Get In Touch</h3>
        <p className="mb-10 text-zinc-400">
          I&apos;m actively looking for DevOps and SRE roles in the Boston area
          or remote. Feel free to reach out if you&apos;d like to connect.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:kanishk2607@gmail.com"
            className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-emerald-400"
          >
            Email Me
          </a>
          <a
            href="https://github.com/kanishksingh01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kanishksingh01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
