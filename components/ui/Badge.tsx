import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "muted";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20",
    accent: "bg-accent text-white border border-accent",
    outline: "bg-transparent text-foreground border border-border hover:border-accent/40",
    muted: "bg-muted text-muted-foreground border border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
