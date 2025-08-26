"use client";
import { useInformation } from "@/store/useInformation";

export default function Skills() {
  const skillsInfo = useInformation((state) => state.skillsInfo);
  const softSkillsInfo = useInformation((state) => state.softSkillsInfo);
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow border-l-4 border-yellow-500 mb-4">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">Habilidades</h2>
      <div>
        <h3 className="font-semibold text-yellow-300">Técnicas</h3>
        <ul className="list-disc ml-6 text-gray-200 text-sm">
          {skillsInfo.map((skill: any, idx: number) => (
            <li key={idx}>
              {skill.skill}
              <span className="ml-2 text-yellow-400 text-xs font-semibold">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-yellow-300">Blandas</h3>
        <ul className="list-disc ml-6 text-gray-200 text-sm">
          {softSkillsInfo.map((skill: any, idx: number) => (
            <li key={idx}>
              {skill.skill}
              <span className="ml-2 text-yellow-400 text-xs font-semibold">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
