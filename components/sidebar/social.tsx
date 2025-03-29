"use client";

import { ThemeSwitcher } from "@/components/sidebar/theme-switcher";
import { Github, Linkedin, FileText, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { CursorLink } from "../providers/cursor-provider";

export function Social() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-1"
    >
      {[
        {
          href: "https://youtube.com",
          icon: <Youtube className="h-4 w-4" />,
          label: "YouTube",
        },
        {
          href: "https://github.com/CMOISDEAD",
          icon: <Github className="h-4 w-4" />,
          label: "GitHub",
        },
        {
          href: "https://www.linkedin.com/in/camilo-esteban-davila/",
          icon: <Linkedin className="h-4 w-4" />,
          label: "LinkedIn",
        },
        {
          href: "/cv.pdf",
          icon: <FileText className="h-4 w-4" />,
          label: "CV",
        },
      ].map((social, index) => (
        <CursorLink key={social.label}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <Link
                href={social.href}
                target="_blank"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            </Button>
          </motion.div>
        </CursorLink>
      ))}
      <CursorLink>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          <ThemeSwitcher />
        </motion.div>
      </CursorLink>
    </motion.div>
  );
}
