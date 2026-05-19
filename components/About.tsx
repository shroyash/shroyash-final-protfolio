"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import Reveal from "./Reveal";
import Image from "next/image";

import shroyashImg from "../public/shroyash.jpeg";

const chips = [
  "Kathmandu, Nepal",
  "BCA Student",
  "Java Dev",
  "🌏 Open to Remote",
  "Microservices",
  "System Design",
];

export default function About() {
  return (
    <section id="about" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
      <Reveal>
  <div className="flex justify-center">
    <span
      className="section-label md:mr-14 px-[10px]"
      style={{ textAlign: "center" }}
    >
      01 — About Me
    </span>
  </div>
</Reveal>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-center mt-2">
          
          {/* Avatar side */}
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center">
              
              {/* Image Card */}
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                {/* Gradient border */}
                <div
                  className="relative w-64 h-64 rounded-2xl p-[3px]"
                  style={{
                    background:
                      "linear-gradient(135deg,#4f9cf9,#7c3aed)",
                  }}
                >
                  {/* Inner image box */}
                  <div
                    className="w-full h-full rounded-2xl overflow-hidden"
                    style={{ background: "var(--bg2)" }}
                  >
                    <Image
                      src={shroyashImg}
                      alt="Shroyash Shrestha"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl -z-10"
                  style={{
                    background:
                      "linear-gradient(135deg,#4f9cf9,#7c3aed)",
                    opacity: 0.15,
                    filter: "blur(30px)",
                    transform: "scale(1.3)",
                  }}
                />
              </motion.div>

              {/* Chips */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs px-3 py-1 rounded-md border font-mono"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text2)",
                      fontFamily:
                        "JetBrains Mono, monospace",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <Reveal delay={0.2}>
            <span className="section-label">Who I Am</span>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Passionate about{" "}
              <span className="grad-text">
                backend engineering
              </span>
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--text2)" }}
            >
              <p>
                I&apos;m a Java Backend Developer with hands on industry experience building
                scalable, secure, and high-performance backend systems. My core expertise
                lies in Spring Boot, Spring Security, and microservices architecting
                systems that work at scale and under real production pressure.
              </p>

              <p>
                At Kritim Mind Technologies, I built secure authentication flows with JWT + RSA + Redis,
                dynamic mock test engines, and optimized leaderboard systems shipped to
                real users. I care deeply about SOLID principles, clean code, and choosing
                the right design pattern for each problem.
              </p>

              <p>
                Beyond the backend, I build full-stack projects with React and Next.js,
                and I&apos;m constantly leveling up my system design thinking. Long-term,
                I aim to work at a world-class product company.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "GitHub", href: personal.github },
                { label: "LinkedIn", href: personal.linkedin },
                { label: "Email", href: `mailto:${personal.email}` },
              ].map((l) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text2)",
                  }}
                  whileHover={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    y: -2,
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}