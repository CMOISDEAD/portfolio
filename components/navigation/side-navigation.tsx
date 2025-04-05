"use client";

import type { LucideIcon } from "lucide-react";
import SocialLinks from "../social-links";

interface NavItem {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  username?: string;
}

interface Props {
  navItems: NavItem[];
  socialLinks: SocialLink[];
  activeSection: string;
  onNavItemClick: (sectionId: string) => void;
}

export default function SideNavigation({
  navItems,
  socialLinks,
  activeSection,
  onNavItemClick,
}: Props) {
  return (
    <nav className="fixed top-0 left-0 h-full w-20 border-r border-zinc-800 hidden md:flex flex-col items-center justify-between py-10 z-50">
      <div className="text-2xl font-bold">CD</div>

      <div className="flex flex-col items-center justify-evenly h-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavItemClick(item.id)}
            className={`text-xs tracking-widest uppercase ${
              activeSection === item.id
                ? "text-white"
                : "text-zinc-500 hover:text-white"
            } transform -rotate-90 transition-colors duration-300 cursor-pointer`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <SocialLinks links={socialLinks} direction="vertical" />
    </nav>
  );
}
