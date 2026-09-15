export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Survive The Swarm Wiki",
  shortName: "Survive The Swarm",
  logoText: "STS",
  tagline: "Complete Guides, Codes, Heroes, Upgrades & Tier Lists",
  description: "Your ultimate guide to Survive The Swarm on Roblox! Explore active working codes, hero abilities, weapon upgrades, survival builds, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://survivetheswarm.top",
  gameUrl: "https://www.roblox.com/games/138955781346212/Survive-The-Swarm",
  heroVideoId: "_xECVbl92CE",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
