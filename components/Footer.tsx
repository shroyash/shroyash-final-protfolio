"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { personal, navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg2)",
        borderColor: "var(--border)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <div
              className="font-mono font-semibold text-base grad-text mb-1"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              &lt;shroyash.dev /&gt;
            </div>
            <div className="text-xs" style={{ color: "var(--text3)" }}>
              Designed &amp; built with ☕ · Kathmandu, Nepal
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth
                duration={600}
                offset={-70}
                className="text-xs cursor-pointer transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--text3)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { label: "GitHub", href: personal.github },
              { label: "LinkedIn", href: personal.linkedin },
              { label: "Email", href: `mailto:${personal.email}` },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg border transition-all"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text3)",
                }}
                whileHover={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div
          className="text-center text-xs mt-8 pt-6 border-t"
          style={{ color: "var(--text3)", borderColor: "var(--border)" }}
        >
          © {new Date().getFullYear()} Shroyash Shrestha · All rights reserved ·{" "}
          <span className="grad-text font-semibold">Open to remote opportunities</span>
        </div>
      </div>
    </footer>
  );
}
