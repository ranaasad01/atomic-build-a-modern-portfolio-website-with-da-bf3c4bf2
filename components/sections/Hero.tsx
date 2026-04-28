"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "@/lib/data";

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor", "Problem Solver"];

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">Alex Morgan</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="h-12 flex items-center justify-center mb-6"
          >
            <RoleAnimator roles={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10"
          >
            I craft high-performance web applications with modern technologies.
            Passionate about clean code, great UX, and turning complex problems
            into elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-white font-medium rounded-xl transition-all duration-200 shadow-glow hover:shadow-glow-strong"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted border border-border hover:border-accent/40 text-foreground font-medium rounded-xl transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <button
              onClick={handleScrollToContact}
              className="flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground font-medium rounded-xl transition-all duration-200 hover:bg-muted"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-muted hover:bg-accent/10 border border-border hover:border-accent/40 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-muted hover:bg-accent/10 border border-border hover:border-accent/40 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-muted hover:bg-accent/10 border border-border hover:border-accent/40 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <div className="w-px h-6 bg-border" />
            <span className="text-sm text-muted-foreground">
              6+ years experience
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-16 grid grid-cols-3 gap-8 sm:gap-16"
          >
            {[
              { value: "50+", label: "Projects Shipped" },
              { value: "30+", label: "Happy Clients" },
              { value: "6+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function RoleAnimator({ roles }: { roles: string[] }) {
  return (
    <motion.div
      key={roles[0]}
      className="text-2xl sm:text-3xl font-semibold text-muted-foreground"
    >
      <AnimatedRoles roles={roles} />
    </motion.div>
  );
}

function AnimatedRoles({ roles }: { roles: string[] }) {
  "use client";
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="text-accent-light"
    >
      {roles[index]}
    </motion.span>
  );
}

import * as React from "react";
