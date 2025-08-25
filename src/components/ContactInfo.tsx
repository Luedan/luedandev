import { FaPhoneAlt, FaEnvelope, FaHome, FaGlobeAmericas, FaIdCard, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500">
        <FaPhoneAlt className="text-yellow-400" />
        <span>(315) 309 6672</span>
      </div>
      <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500">
        <FaEnvelope className="text-yellow-400" />
        <span>atencia17@gmail.com</span>
      </div>
      <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500">
        <FaHome className="text-yellow-400" />
        <span>Carrera 49C #75-14 Apto. 1, Barranquilla</span>
      </div>
      <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500">
        <FaGlobeAmericas className="text-yellow-400" />
        <span>Venezolano</span>
      </div>
      <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500">
        <FaIdCard className="text-yellow-400" />
        <span>PPT: 5.234.103</span>
      </div>
      <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500">
        <FaLinkedin className="text-yellow-400" />
        <a href="https://www.linkedin.com/in/luedand2/" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300">linkedin.com/in/luedand2</a>
      </div>
      <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500">
        <FaGithub className="text-yellow-400" />
        <a href="https://github.com/Luedan" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300">github.com/Luedan</a>
      </div>
    </div>
  );
}
