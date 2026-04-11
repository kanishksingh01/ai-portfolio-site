"use client";

import { useEffect, useRef, useState } from "react";

export function Contact() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="border-t border-white/[.06] px-6 py-24">
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        <h2
          className={`mb-2 font-mono text-base tracking-wide text-green-400 glow-green ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Contact
        </h2>
        <h3
          className={`mb-6 text-3xl font-bold gradient-text ${
            visible ? "animate-fade-in-up stagger-1" : "opacity-0"
          }`}
        >
          Get In Touch
        </h3>
        <p
          className={`mb-10 text-slate-400 leading-relaxed ${
            visible ? "animate-fade-in-up stagger-2" : "opacity-0"
          }`}
        >
          I&apos;m actively looking for DevOps and SRE roles in the Boston area
          or remote. Feel free to reach out if you&apos;d like to connect.
        </p>
        <div
          className={`flex flex-wrap items-center justify-center gap-4 ${
            visible ? "animate-fade-in-up stagger-3" : "opacity-0"
          }`}
        >
          <a
            href="mailto:kanishks2021@gmail.com"
            className="cursor-pointer rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
          >
            Email Me
          </a>
          <a
            href="https://github.com/kanishksingh01"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-white/[.03]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kanishksingh01/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-white/[.03]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
