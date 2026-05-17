"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { personal } from "@/data/portfolio";
import Reveal from "./Reveal";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    bg: "rgba(79,156,249,0.15)",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "shroyash-shrestha",
    href: personal.linkedin,
    bg: "rgba(14,118,168,0.15)",
  },
  {
    icon: "⚡",
    label: "GitHub",
    value: "github.com/shroyash",
    href: personal.github,
    bg: "rgba(255,255,255,0.08)",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_jtmnanr",
        "template_wpbivgj",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "shroyash35@gmail.com",
        },
        "QHUGYBFqzK-IhenEl"
      );

      toast.success("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <span className="section-label">07 — Get In Touch</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-4xl font-bold mb-3">
            Let&apos;s <span className="grad-text">Connect</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="text-base mb-12 max-w-xl"
            style={{ color: "var(--text2)" }}
          >
            Open to remote roles, collaborations, and interesting conversations about backend engineering.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <Reveal delay={0.15}>
            <h3 className="text-2xl font-bold mb-3">
              Let&apos;s build something great together
            </h3>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text2)" }}>
              I&apos;m actively seeking backend engineering roles and collaborations.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((cl) => (
                <motion.a
                  key={cl.label}
                  href={cl.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                  whileHover={{ x: 4, borderColor: "var(--accent)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: cl.bg }}
                  >
                    {cl.icon}
                  </div>

                  <div>
                    <div className="text-xs font-mono" style={{ color: "var(--text3)" }}>
                      {cl.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {cl.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* RIGHT FORM */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Name", placeholder: "Your name", type: "text" },
                  { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-xs font-mono" style={{ color: "var(--text3)" }}>
                      {f.label}
                    </label>

                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, [f.key]: e.target.value }))
                      }
                      className="form-input"
                    />
                  </div>
                ))}
              </div>

              <input
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm((p) => ({ ...p, subject: e.target.value }))
                }
                className="form-input"
              />

              <textarea
                rows={5}
                placeholder="Message..."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className="form-input resize-none"
              />

              <motion.button
                className="btn btn-primary w-full"
                onClick={handleSubmit}
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? "⏳ Sending..." : "🚀 Send Message"}
              </motion.button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}