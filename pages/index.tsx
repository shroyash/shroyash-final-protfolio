"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

// Components
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Divider = () => (
  <div
    style={{
      width: "100%",
      height: 1,
      background: "linear-gradient(90deg,transparent,var(--border),transparent)",
      position: "relative",
      zIndex: 1,
    }}
  />
);

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <>
      <Head>
        <title>Shroyash Shrestha — Java Backend Engineer</title>
      </Head>

      {/* Loading screen */}
      <Loader />

      {/* Animated cursor */}
      <CustomCursor />

      {/* Toast notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--surface)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            fontFamily: "Space Grotesk, sans-serif",
          },
        }}
      />

      {/* Particle field */}
      <ParticlesBackground isDark={isDark} />

      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={() => setIsDark((d) => !d)} />

      {/* Main content */}
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Certifications />
        <Divider />
        <Achievements />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
