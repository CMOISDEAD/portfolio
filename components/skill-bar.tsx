"use client";

import { motion } from "motion/react";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <span className="text-lg">{name}</span>
        <span className="text-zinc-400">{percentage}%</span>
      </div>
      <div className="h-[1px] bg-zinc-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-white"
        />
      </div>
    </div>
  );
}
