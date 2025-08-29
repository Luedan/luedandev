'use client';
import { getInformationByLanguage, useInformation } from "@/store/useInformation";
import { getWordsByLanguage } from "@/utils/constants";

export default function Experience() {
  const lang = useInformation((state) => state.language);
  const experienceInfo = getInformationByLanguage(lang)?.experienceInfo;
  const words = getWordsByLanguage(lang);
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow border-l-4 border-yellow-500 mb-4">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">{words.experience}</h2>
      {experienceInfo.map((exp, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="font-semibold text-yellow-300">
            {exp.jobTitle} – {exp.company}
            <span className="text-gray-400"> ({exp.startDate} - {exp.endDate})</span>
          </h3>
          <p className="text-gray-200 text-sm mt-1">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
