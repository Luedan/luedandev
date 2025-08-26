"use client";
import { useInformation } from "@/store/useInformation";
import { lang } from "@/types/information";
import Image from "next/image";
import React from "react";

const flags: Record<string, lang> = {
  ES: "ES",
  EN: "EN",
};

export default function LanguageSwitcher() {
  const language = useInformation((state) => state.language);
  const setLanguage = useInformation((state) => state.setLanguage);

  return (
    <div className="flex gap-2 items-center justify-end mb-4">
      {Object.keys(flags).map((flag) => (
        <button
          key={flag}
          onClick={() => setLanguage(flags[flag])}
          className={`text-2xl px-2 py-1 rounded-full border-2 transition-colors duration-200 focus:outline-none cursor-pointer ${
            language === flag
              ? "border-blue-500 bg-blue-100"
              : "border-transparent bg-transparent"
          }`}
          aria-label={flag === "ES" ? "Español" : "English"}
        >
          <Image src={`/${flag}.svg`} alt={flag === "ES" ? "Español" : "English"} width={32} height={32} />
        </button>
      ))}
    </div>
  );
}
