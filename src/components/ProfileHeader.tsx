"use client";
import Image from "next/image";
import { useInformation } from "@/store/useInformation";

export default function ProfileHeader() {
  const personalInfo = useInformation((state) => state.personalInfo);
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <Image
        src={personalInfo.picture || "/pic.jpeg"}
        alt={`Foto de ${personalInfo.name}`}
        width={120}
        height={120}
        className="rounded-full border-4 border-yellow-500 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-yellow-400">
        {personalInfo.name}
      </h1>
      <span className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold shadow">
        {personalInfo.title}
      </span>
      {personalInfo.website && (
        <a
          href={personalInfo.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline text-xs mt-2 hover:text-yellow-400"
        >
          {personalInfo.website.replace("https://", "")}
        </a>
      )}
    </div>
  );
}
