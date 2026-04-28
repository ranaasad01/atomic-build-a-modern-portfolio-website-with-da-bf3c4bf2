"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ArrowRight, Star } from "lucide-react";
import Badge from "./ui/Badge";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const gradients = [
  "from-indigo-500/20 via-purple-500/10 to-pink-500/20",
  "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
  "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  "from-pink-500/20 via-rose-500/10 to-red-500/20",
  "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
];

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];
  const headerClass = "h-40 bg-gradient-to-br relative overflow-hidden " + gradient;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 hover:shadow-glow transition-all duration-300"
    >
      <div className={headerClass}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-background/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-white/80">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
            <Star className="w-3 h-3 text-accent-light fill-accent-light" />
            <span className="text-xs text-accent-light font-medium">Featured</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-full bg-background/30 backdrop-blur-sm border border-white/10 text-xs text-white/70">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-1">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="default" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="muted" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-border">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          <Link
            href={"/projects/" + project.slug}
            className="ml-auto flex items-center gap-1 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
          >
            View Details
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
