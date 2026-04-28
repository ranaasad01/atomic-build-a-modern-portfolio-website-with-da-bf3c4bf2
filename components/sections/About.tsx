"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Coffee } from "lucide-react";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

const highlights = [
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Calendar, label: "Experience", value: "6+ Years" },
  { icon: Coffee, label: "Projects", value: "50+ Shipped" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              Passionate developer with a love for building things that matter.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + highlights */}
          <FadeInWhenVisible direction="left">
            <div className="flex flex-col items-center lg:items-start gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl overflow-hidden border-2 border-accent/20 shadow-glow">
                  <div className="w-full h-full bg-gradient-to-br from-accent/30 via-purple-500/20 to-indigo-500/30 flex items-center justify-center">
                    <div className="text-7xl font-bold gradient-text">AM</div>
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-card"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Open to work</span>
                  </div>
                </motion.div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-accent" />
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-semibold text-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right: Bio */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I&apos;m a <span className="text-foreground font-semibold">Full Stack Developer</span> based
                  in San Francisco with over 6 years of experience building scalable web applications
                  and developer tools.
                </p>
                <p>
                  My journey started with a Computer Science degree from UC Berkeley, where I fell in
                  love with the intersection of design and engineering. Since then, I&apos;ve worked with
                  startups and Fortune 500 companies, shipping products used by millions of people.
                </p>
                <p>
                  I specialize in <span className="text-accent font-medium">React</span>,{" "}
                  <span className="text-accent font-medium">Next.js</span>, and{" "}
                  <span className="text-accent font-medium">Node.js</span>, with a strong focus on
                  performance, accessibility, and developer experience. I&apos;m also an active open source
                  contributor and occasional technical writer.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me hiking in the Bay Area, experimenting with
                  generative AI art, or mentoring junior developers in my community.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Clean, maintainable code",
                  "Accessibility first",
                  "Performance obsessed",
                  "Continuous learner",
                  "Team collaborator",
                  "User-centric design",
                ].map((value) => (
                  <div key={value} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {value}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent/80 text-white font-medium rounded-xl transition-all duration-200 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-card hover:bg-muted border border-border hover:border-accent/40 text-foreground font-medium rounded-xl transition-all duration-200 text-sm"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
