"use client";
import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <span className="section-label">06 — Achievements</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl font-bold mb-3">
            Key <span className="grad-text">Highlights</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base mb-12 max-w-xl" style={{ color: "var(--text2)" }}>
            Milestones that reflect my growth as a backend engineer.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, i) => (
            <Reveal key={ach.title} delay={i * 0.08}>
              <motion.div
                className="card p-6 flex gap-4 items-start"
                whileHover={{ y: -3, borderColor: "var(--border2)" }}
              >
                <span className="text-3xl flex-shrink-0 leading-none mt-0.5">
                  {ach.emoji}
                </span>
                <div>
                  <h4 className="font-bold text-base mb-1.5" style={{ color: "var(--text)" }}>
                    {ach.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                    {ach.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
