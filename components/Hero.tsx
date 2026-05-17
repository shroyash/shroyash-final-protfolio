"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import { personal, stats } from "@/data/portfolio";
import Reveal from "./Reveal";

import shroyashImg from "../public/shroyash.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: 64, zIndex: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
          

            {/* Greeting */}
            <Reveal delay={0.05}>
              <p
                className="font-mono text-lg mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Hello, I am
              </p>
            </Reveal>

            {/* Name */}
            <Reveal delay={0.1}>
              <h1
                className="font-bold leading-tight mb-4"
                style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
              >
                <span className="grad-text">Shroyash</span>
                <br />
                <span style={{ color: "var(--text)" }}>Shrestha</span>
              </h1>
            </Reveal>

            {/* Animated Title */}
            <Reveal delay={0.15}>
              <div
                className="text-xl md:text-2xl font-semibold mb-5"
                style={{ color: "var(--text2)" }}
              >
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1800,
                    "Java Spring Boot Engineer",
                    1800,
                    "Backend Developer",
                    1800,
                    "React & Next.js Developer",
                    1800,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  speed={50}
                />
              </div>
            </Reveal>

            {/* Summary */}
            <Reveal delay={0.2}>
              <p
                className="text-base md:text-lg mb-10 max-w-xl leading-relaxed"
                style={{ color: "var(--text2)" }}
              >
                {personal.summary}
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link to="projects" smooth duration={600} offset={-70}>
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Projects
                  </motion.button>
                </Link>

                <a
                  href="https://www.linkedin.com/in/shroyash-shrestha-3862b2254/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.button
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📄 Connect on LinkedIn
                  </motion.button>
                </a>

                <Link to="contact" smooth duration={600} offset={-70}>
                  <motion.button
                    className="btn btn-ghost"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    ✉ Contact Me
                  </motion.button>
                </Link>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-8">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.35 + i * 0.1,
                    }}
                  >
                    <div className="text-3xl font-bold grad-text">
                      {s.number}
                    </div>

                    <div
                      className="text-xs mt-1"
                      style={{
                        color: "var(--text3)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
          <Reveal delay={0.2}>
            <motion.div
              className="hidden md:flex justify-center items-center "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), transparent)",
                  }}
                />

                {/* Image Card */}
                <div
                  className="relative overflow-hidden rounded-3xl border shadow-2xl"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  <Image
                    src={shroyashImg}
                    alt="Shroyash Shrestha"
                    width={520}
                    height={620}
                    priority
                    className="object-cover w-[420px] md:w-[500px] lg:w-[420px] h-auto hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </motion.div>

        
          </Reveal>
          
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <div
            className="text-xs font-mono"
            style={{
              color: "var(--text3)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            scroll
          </div>

          <div style={{ color: "var(--text3)" }}>↓</div>
        </motion.div>
      </div>
    </section>
  );
}
