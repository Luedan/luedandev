"use client";
import { getInformationByLanguage, useInformation } from "@/store/useInformation";

export const AboutMe = () => {
  const lang = useInformation((state) => state.language);
  const aboutMe = getInformationByLanguage(lang)?.personalInfo?.aboutMe;
  return (
    <div className="bg-gradient-to-r from-[#23232a] to-[#18181b] rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500 mb-4">
      <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 tracking-wide">
        Acerca de mí
      </h2>
      <p className="text-gray-200 text-lg leading-relaxed text-justify">{aboutMe}</p>
    </div>
  );
};
