import { BookOpen, Code2, Flame, Shield, Swords, Trophy, Wrench } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "builds", path: "/builds", icon: Trophy, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "controls", path: "/controls", icon: Flame, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Shield, isContentType: true },
  { key: "modes", path: "/modes", icon: Wrench, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
