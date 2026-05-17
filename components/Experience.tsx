"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <span className="section-label">03 — Work Experience</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl font-bold mb-3">
            Where I&apos;ve <span className="grad-text">Worked</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base mb-12 max-w-xl" style={{ color: "var(--text2)" }}>
            Real-world industry experience building production-level software that serves real users.
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-2 bottom-2 w-px"
            style={{
              background: "linear-gradient(to bottom, #4f9cf9, #7c3aed)",
              opacity: 0.3,
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-[48px_1fr] gap-6">
                  {/* Icon dot */}
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 relative z-10"
                    style={{
                      background: "linear-gradient(135deg,#4f9cf9,#7c3aed)",
                      boxShadow: "0 0 20px rgba(79,156,249,0.35)",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="card p-7"
                    whileHover={{ y: -3 }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="font-bold text-lg" style={{ color: "var(--text)" }}>
                          {exp.role}
                        </div>
                        <div className="font-semibold text-sm mt-0.5" style={{ color: "var(--accent)" }}>
                          {exp.company}
                        </div>
                      </div>
                      <div
                        className="text-xs px-2.5 py-1 rounded-lg border font-mono flex-shrink-0"
                        style={{
                          background: "var(--bg2)",
                          borderColor: "var(--border)",
                          color: "var(--text3)",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {exp.duration} · {exp.period}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-sm leading-relaxed pl-4 relative"
                          style={{ color: "var(--text2)" }}
                        >
                          <span
                            className="absolute left-0"
                            style={{ color: "var(--accent)" }}
                          >
                            ▸
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 mt-5 text-xs font-mono px-3 py-1.5 rounded-md border transition-all"
                      style={{
                        color: "var(--accent3)",
                        borderColor: "var(--border)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                      whileHover={{ borderColor: "var(--accent3)" }}
                    >
                      🔗 {exp.linkLabel} ↗
                    </motion.a>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
