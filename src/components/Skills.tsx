"use client";
import { getInformationByLanguage, useInformation } from "@/store/useInformation";
import SkillBar from "./SkillBar";

export default function Skills() {
  const lang = useInformation((state) => state.language);
  const info = getInformationByLanguage(lang);
  const softSkillsInfo = info?.softSkillsInfo;
  const skillsInfo = info?.skillsInfo;
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow border-l-4 border-yellow-500 mb-4">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">Habilidades</h2>
      <div>
        <h3 className="font-semibold text-yellow-300">Técnicas</h3>
  <ul className="grid grid-cols-1 gap-0.5 ml-2">
          {skillsInfo.map((skill, idx) => (
            <li key={idx} className="flex items-center justify-between gap-2 py-0.5">
              <span className="font-medium text-gray-200 w-1/2 truncate">{skill.skill}</span>
              <span className="flex-1 flex justify-end">
                <SkillBar level={skill.level} />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-yellow-300">Blandas</h3>
  <ul className="grid grid-cols-1 gap-0.5 ml-2">
          {softSkillsInfo.map((skill, idx) => (
            <li key={idx} className="flex items-center justify-between gap-2 py-0.5">
              <span className="font-medium text-gray-200 w-1/2 truncate">{skill.skill}</span>
              <span className="flex-1 flex justify-end">
                <SkillBar level={skill.level} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
