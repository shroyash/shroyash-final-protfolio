"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";

const iconBg: Record<string, string> = {
  health: "linear-gradient(135deg,#06b6d4,#0891b2)",
  ai: "linear-gradient(135deg,#7c3aed,#a855f7)",
  company: "linear-gradient(135deg,#f97316,#ef4444)",
};

const badgeStyle: Record<string, { bg: string; color: string; border: string }> = {
  winner: { bg: "rgba(234,179,8,0.15)", color: "#fbbf24", border: "rgba(234,179,8,0.3)" },
  new: { bg: "rgba(79,156,249,0.15)", color: "var(--accent)", border: "rgba(79,156,249,0.3)" },
  prod: { bg: "rgba(34,197,94,0.15)", color: "#4ade80", border: "rgba(34,197,94,0.3)" },
};

export default function Projects() {
  return (
    <section id="projects" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <span className="section-label">04 — Projects</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl font-bold mb-3">
            Things I&apos;ve <span className="grad-text">Built</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base mb-12 max-w-xl" style={{ color: "var(--text2)" }}>
            From microservices platforms to hackathon-winning AI apps — production-grade work.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => {
            const bs = badgeStyle[proj.badge];
            return (
              <Reveal key={proj.title} delay={i * 0.1}>
                <motion.div
                  className="flex flex-col h-full rounded-2xl border overflow-hidden"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  whileHover={{ y: -7, boxShadow: "0 24px 50px rgba(0,0,0,0.35)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Top */}
                  <div className="p-7 flex-1">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ background: iconBg[proj.color] }}
                      >
                        {proj.icon}
                      </div>
                      <span
                        className="text-xs font-semibold font-mono px-2 py-1 rounded-md border"
                        style={{
                          background: bs.bg,
                          color: bs.color,
                          borderColor: bs.border,
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {proj.badgeLabel}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
                      {proj.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                      {proj.description}
                    </p>
                  </div>

                  {/* Stack */}
                  <div
                    className="flex flex-wrap gap-1.5 px-7 py-4 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded border font-mono"
                        style={{
                          background: "var(--bg2)",
                          borderColor: "var(--border)",
                          color: "var(--text3)",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className="flex gap-3 px-7 py-4 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* GitHub button — only show if github link exists */}
                    {proj.github && (
                      <motion.a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center text-sm font-semibold py-2 rounded-lg border transition-all"
                        style={{
                          background: "var(--bg2)",
                          borderColor: "var(--border)",
                          color: "var(--text2)",
                        }}
                        whileHover={{ borderColor: "var(--text)", color: "var(--text)" }}
                      >
                        ⚡ GitHub
                      </motion.a>
                    )}

                    {/* Live button — show "In Progress" if not live yet */}
                    {proj.isLive ? (
                      <motion.a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center text-sm font-semibold py-2 rounded-lg text-white"
                        style={{ background: "linear-gradient(135deg,#4f9cf9,#7c3aed)" }}
                        whileHover={{ opacity: 0.9 }}
                      >
                        🔗 Live
                      </motion.a>
                    ) : (
                      <span
                        className="flex-1 text-center text-sm font-semibold py-2 rounded-lg border"
                        style={{
                          background: "rgba(251,191,36,0.08)",
                          borderColor: "rgba(251,191,36,0.25)",
                          color: "#fbbf24",
                          cursor: "default",
                        }}
                      >
                        🚧 In Progress
                      </span>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}