"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-base"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              background: "linear-gradient(135deg,#4f9cf9,#7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            INITIALIZING SHROYASH SHRESTHA PORTFOLIO...
          </motion.div>
          <div className="loader-bar-track">
            <div className="loader-bar-fill" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs font-mono"
            style={{ color: "var(--text3)", fontFamily: "JetBrains Mono, monospace" }}
          >
            Shroyash Shrestha · Java Backend Engineer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
