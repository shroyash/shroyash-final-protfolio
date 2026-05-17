"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";

const colorMap: Record<string, string> = {
  blue: "rgba(79,156,249,0.15)",
  purple: "rgba(124,58,237,0.15)",
  cyan: "rgba(6,182,212,0.15)",
  green: "rgba(34,197,94,0.15)",
  orange: "rgba(249,115,22,0.15)",
};

export default function Skills() {
  return (
    <section id="skills" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <span className="section-label">02 — Technical Skills</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl font-bold mb-3">
            My <span className="grad-text">Tech Stack</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base mb-12 max-w-xl" style={{ color: "var(--text2)" }}>
            Technologies I work with to build scalable, production ready software.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <Reveal key={skill.category} delay={i * 0.07}>
              <motion.div
                className="card p-7 h-full relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Top gradient bar on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(135deg,#4f9cf9,#7c3aed)", opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: colorMap[skill.color] || colorMap.blue }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-base" style={{ color: "var(--text)" }}>
                      {skill.category}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text3)", fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {skill.subtitle}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md border font-mono"
                      style={{
                        background: "var(--bg2)",
                        borderColor: "var(--border)",
                        color: "var(--text2)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                      whileHover={{
                        borderColor: "var(--accent)",
                        color: "var(--accent)",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
