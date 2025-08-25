import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <Image
        src="/pic.jpeg"
        alt="Foto de Luis Atencia"
        width={120}
        height={120}
        className="rounded-full border-4 border-yellow-500 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-yellow-400">Luis Atencia</h1>
      <span className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold shadow">
        Líder Técnico - Full stack developer
      </span>
    </div>
  );
}
