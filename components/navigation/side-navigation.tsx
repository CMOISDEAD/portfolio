"use client";

import type { LucideIcon } from "lucide-react";
import SocialLinks from "../social-links";
import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface Props {
  navItems: NavItem[];
  activeSection: string;
  onNavItemClick: (sectionId: string) => void;
}

export default function SideNavigation({
  navItems,
  activeSection,
  onNavItemClick,
}: Props) {
  return (
    <nav className="fixed top-0 left-0 h-full w-20 border-r border-muted hidden md:flex flex-col items-center justify-between py-10 z-50">
      <Link href="/" className="text-2xl font-bold">
        CD
      </Link>

      <div className="flex flex-col items-center justify-evenly h-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavItemClick(item.id)}
            className={`text-xs tracking-widest uppercase ${
              activeSection === item.id
                ? "text-foreground italic"
                : "text-muted-foreground hover:text-foreground"
            } transform -rotate-90 transition-colors duration-300 cursor-pointer`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <SocialLinks direction="vertical" />
    </nav>
  );
}
