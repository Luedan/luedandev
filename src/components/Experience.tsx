export default function Experience() {
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow border-l-4 border-yellow-500 mb-4">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">Experiencia Laboral</h2>
      <div className="mb-2">
        <h3 className="font-semibold text-yellow-300">Líder Técnico – Horbath Technologies <span className="text-gray-400">(2024 - Actualidad)</span></h3>
        <ul className="list-disc ml-6 text-gray-200 text-sm">
          <li>Control de piso: .NET, React, SQL Server</li>
          <li>Portal de clientes: React, Express, Postgres</li>
          <li>Aplicación de ventas: React Native, MongoDB, Postgres, NestJS</li>
          <li>Portal de pedidos internos: Next.js, Postgres</li>
          <li>Migración de proyectos Lambdas AWS</li>
        </ul>
      </div>
      <div className="mb-2">
        <h3 className="font-semibold text-yellow-300">Líder Técnico – Wow Desarrollos Digitales <span className="text-gray-400">(2021 - 2024)</span></h3>
        <ul className="list-disc ml-6 text-gray-200 text-sm">
          <li>Proyectos financieros y contables, analista y mentor</li>
          <li>Frontend y backend: JavaScript, TypeScript, Node.js, React.js, Next.js, Docker</li>
          <li>Integración y despliegue: Azure DevOps y AWS</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-yellow-300">Tutor Académico – Fundación Estudiar y Trabajar <span className="text-gray-400">(2023)</span></h3>
        <ul className="list-disc ml-6 text-gray-200 text-sm">
          <li>Guía a estudiantes en desarrollo de software</li>
        </ul>
      </div>
    </div>
  );
}
