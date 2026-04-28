"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm group-hover:bg-accent/80 transition-colors">
                AM
              </div>
              <span className="font-semibold text-foreground hidden sm:block">Alex Morgan</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/projects"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              >
                All Projects
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent hover:bg-accent/80 text-white rounded-lg transition-all duration-200"
              >
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  All Projects
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
                className="pt-2 border-t border-border mt-2"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-accent hover:bg-accent/80 text-white rounded-lg transition-all duration-200"
                >
                  Download Resume
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
