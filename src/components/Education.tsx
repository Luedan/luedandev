'use client';
import { getInformationByLanguage, useInformation } from "@/store/useInformation";

export default function Education() {
  const lang = useInformation((state) => state.language);
  const educationInfo = getInformationByLanguage(lang)?.educationInfo;
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow border-l-4 border-yellow-500 mb-4">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">Educación</h2>
      {educationInfo.map((edu, idx: number) => (
        <div key={idx} className="mb-4">
          <p className="text-yellow-300 font-semibold text-base">
            {edu.degree} { edu?.fieldOfStudy && `en ${edu.fieldOfStudy}`}
          </p>
          <p className="text-gray-200 text-sm">
            {edu.institution}
          </p>
          <p className="text-gray-400 text-xs">
            {edu.startDate} - {edu.endDate}
          </p>
          <p className="text-gray-300 text-xs mt-1">
            {edu.description}
          </p>
        </div>
      ))}
    </div>
  );
}
