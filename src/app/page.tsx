import ContactInfo from "@/components/ContactInfo";
import DownloadCV from "@/components/DownloadCV";
import Courses from "@/components/Courses";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ProfileHeader from "@/components/ProfileHeader";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23232a] to-[#101014] py-12 px-2 flex justify-center items-center font-sans">
      <div className="flex flex-col w-full max-w-6xl">
        <DownloadCV />
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Panel lateral */}
          <aside className="md:w-1/3 w-full bg-gradient-to-br from-[#23232a] to-[#18181b] rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-8 border border-yellow-500">
            <ProfileHeader />
            <div className="w-full">
              <ContactInfo />
            </div>
          </aside>
          {/* Panel principal */}
          <section className="md:w-2/3 w-full bg-gradient-to-br from-[#23232a] to-[#101014] rounded-3xl shadow-2xl p-10 flex flex-col gap-8 border border-gray-800">
            <div className="bg-gradient-to-r from-[#23232a] to-[#18181b] rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500 mb-4">
              <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 tracking-wide">
                Acerca de mí
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                He desempeñado un papel clave en el desarrollo y análisis de
                múltiples proyectos, aportando experiencia técnica y habilidades
                estratégicas. He mantenido y optimizado aplicaciones en
                producción, garantizando su rendimiento y eficiencia a largo
                plazo. Como mentor, impulsé el crecimiento profesional y la
                productividad de varios equipos. Además, lideré investigaciones
                para la implementación de nuevas tecnologías, mejorando los
                procesos de desarrollo. También contribuí activamente a la
                definición de objetivos estratégicos y a la dirección general de
                la empresa.
              </p>
            </div>
            <Experience />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Education />
              <Skills />
            </div>
            <Courses />
          </section>
        </div>
      </div>
      {/* Glow decorativo */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute top-24 left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-24 right-10 w-40 h-40 bg-yellow-500 opacity-10 rounded-full blur-2xl animate-pulse" />
      </div>
    </main>
  );
}
