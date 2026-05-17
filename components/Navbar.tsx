"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { navLinks } from "@/data/portfolio";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${
          scrolled ? "border-b" : ""
        }`}
        style={{
          background: scrolled
            ? isDark
              ? "rgba(5,10,21,0.9)"
              : "rgba(240,244,255,0.9)"
            : "transparent",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="max-w-6xl mx-auto px-6 flex items-center justify-between"
          style={{ height: 64 }}
        >
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <span
              className="font-mono font-semibold text-lg grad-text"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              &lt;shroyash.dev /&gt;
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  smooth
                  duration={600}
                  offset={-70}
                  spy
                  onSetActive={() => setActive(link.href)}
                  className="text-sm font-medium cursor-pointer transition-colors duration-200 hover:text-[var(--accent)]"
                  style={{
                    color: active === link.href ? "var(--accent)" : "var(--text2)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text2)",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              {isDark ? "☀ Light" : "🌙 Dark"}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg border transition-all"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text2)",
              }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] right-0 w-72 h-[calc(100vh-64px)] z-40 flex flex-col gap-4 p-6 border-l"
            style={{
              background: "var(--bg2)",
              borderColor: "var(--border)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth
                duration={600}
                offset={-70}
                className="font-medium text-base py-2 border-b cursor-pointer transition-colors hover:text-[var(--accent)]"
                style={{
                  color: "var(--text2)",
                  borderColor: "var(--border)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
