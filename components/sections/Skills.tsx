"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
// NOTE: Projects, Contact, Footer sections are appended below as named exports

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-indigo-500/20 border-blue-500/20",
  Backend: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20",
  "DevOps & Cloud": "from-orange-500/20 to-amber-500/20 border-orange-500/20",
  "Tools & Other": "from-purple-500/20 to-violet-500/20 border-purple-500/20",
};

const categoryIconColors: Record<string, string> = {
  Frontend: "text-blue-400",
  Backend: "text-emerald-400",
  "DevOps & Cloud": "text-orange-400",
  "Tools & Other": "text-purple-400",
};

const levelLabels = ["", "Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Skills
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              My{" "}
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const colorClass = categoryColors[category.category] || "from-accent/20 to-accent/10 border-accent/20";
            const iconColor = categoryIconColors[category.category] || "text-accent";

            return (
              <FadeInWhenVisible key={category.category} delay={catIndex * 0.1}>
                <div className={"rounded-2xl border bg-gradient-to-br p-6 " + colorClass}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={"w-2 h-6 rounded-full bg-current " + iconColor} />
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {levelLabels[skill.level]}
                          </span>
                        </div>
                        <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: (skill.level / 5) * 100 + "%" }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3,
                              ease: "easeOut",
                            }}
                            className={"h-full rounded-full bg-gradient-to-r " + (
                              category.category === "Frontend" ? "from-blue-500 to-indigo-500" :
                              category.category === "Backend" ? "from-emerald-500 to-teal-500" :
                              category.category === "DevOps & Cloud" ? "from-orange-500 to-amber-500" :
                              "from-purple-500 to-violet-500"
                            )}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInWhenVisible>
            );
          })}
        </div>

        {/* Tech badges */}
        <FadeInWhenVisible delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Rust", "Swift", "Kotlin", "Vue.js", "Angular", "Svelte",
                "Prisma", "tRPC", "Zustand", "Jotai", "Playwright", "Vitest",
                "Nginx", "Linux", "Bash", "WebSockets", "gRPC", "REST APIs",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-xs font-medium bg-card border border-border hover:border-accent/40 hover:text-accent rounded-full text-muted-foreground transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
