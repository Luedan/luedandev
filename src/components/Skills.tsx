export default function Skills() {
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow border-l-4 border-yellow-500 mb-4">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">Habilidades</h2>
      <div>
        <h3 className="font-semibold text-yellow-300">Técnicas</h3>
        <ul className="list-disc ml-6 text-gray-200 text-sm">
          <li>Desarrollo Full-Stack</li>
          <li>JavaScript & TypeScript</li>
          <li>.NET & C#</li>
          <li>Backend & Frontend</li>
          <li>DevOps</li>
          <li>Patrones de diseño y arquitecturas</li>
          <li>Control de versiones</li>
          <li>SCRUM + KANBAN</li>
        </ul>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-yellow-300">Blandas</h3>
        <ul className="list-disc ml-6 text-gray-200 text-sm">
          <li>Liderazgo</li>
          <li>Aprendizaje continuo</li>
          <li>Resolución de problemas</li>
          <li>Gestión de equipos</li>
          <li>Enseñanza y motivación</li>
        </ul>
      </div>
    </div>
  );
}
