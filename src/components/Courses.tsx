'use client';
import { useInformation } from "@/store/useInformation";

export default function Courses() {
  const coursesInfo = useInformation((state) => state.coursesInfo);
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow border-l-4 border-yellow-500 mb-4">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">Cursos</h2>
      <ul className="list-disc ml-6 text-gray-200 text-sm">
        {coursesInfo.map((course: any, idx: number) => (
          <li key={idx}>
            <span className="font-semibold text-yellow-300">{course.title}</span> <span className="text-gray-400">({course.institution})</span>
            <div className="text-gray-400 text-xs mt-1">{course.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
