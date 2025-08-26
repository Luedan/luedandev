import React from "react";

interface SkillBarProps {
  level: string;
}

const levelMap: Record<string, number> = {
  basic: 1,
  intermediate: 2,
  advanced: 3,
  "básico": 1,
  "intermedio": 2,
  "avanzado": 3,
};

export default function SkillBar({ level }: SkillBarProps) {
  const active = levelMap[level.toLowerCase()] || 1;
  return (
    <span className="flex gap-1 ml-2">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`block w-6 h-2 rounded-full transition-all duration-300 border border-yellow-200 ${i <= active ? "bg-yellow-400" : "bg-gray-800"}`}
        />
      ))}
    </span>
  );
}
