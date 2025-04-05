"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  id: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
  activeSection: string;
  onNavItemClick: (sectionId: string) => void;
}

export default function MobileNavigation({
  navItems,
  activeSection,
  onNavItemClick,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavItemClick = (sectionId: string) => {
    onNavItemClick(sectionId);
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 md:hidden">
      <div className="flex justify-between items-center p-6 border-b border-zinc-800 bg-black">
        <div className="text-xl font-bold">Juan Pérez</div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-black border-b border-zinc-800 py-4"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`block w-full text-left px-6 py-3 ${
                activeSection === item.id ? "text-white" : "text-zinc-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
