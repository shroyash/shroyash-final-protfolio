"use client";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <span className="section-label">05 — Certifications</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl font-bold mb-3">
            My <span className="grad-text">Credentials</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base mb-12 max-w-xl" style={{ color: "var(--text2)" }}>
            Recognized achievements and verified professional completions.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.12}>
              <motion.div
                className="card p-7 relative overflow-hidden h-full"
                whileHover={{ y: -4 }}
              >
                {/* decorative circle */}
                <div
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg,#4f9cf9,#7c3aed)",
                    opacity: 0.06,
                  }}
                />

                <div
                  className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{ color: "var(--accent3)", fontFamily: "JetBrains Mono, monospace" }}
                >
                  {cert.org}
                </div>

                <h3 className="font-bold text-lg leading-snug mb-1" style={{ color: "var(--text)" }}>
                  {cert.icon} {cert.title}
                </h3>

                <div
                  className="text-xs font-mono mb-4"
                  style={{ color: "var(--text3)", fontFamily: "JetBrains Mono, monospace" }}
                >
                  {cert.date}
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text2)" }}>
                  {cert.desc}
                </p>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border transition-all"
                  style={{
                    color: "var(--accent)",
                    borderColor: "rgba(79,156,249,0.3)",
                  }}
                  whileHover={{ background: "rgba(79,156,249,0.1)" }}
                >
                  📄 View Certificate ↗
                </motion.a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
