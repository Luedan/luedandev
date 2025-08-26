'use client';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaGlobeAmericas } from 'react-icons/fa';
import { useInformation } from "@/store/useInformation";
import { JSX } from 'react';

const iconMap: Record<string, JSX.Element> = {
  email: <FaEnvelope className="text-yellow-400" />,
  linkedin: <FaLinkedin className="text-yellow-400" />,
  github: <FaGithub className="text-yellow-400" />,
  phone: <FaPhoneAlt className="text-yellow-400" />,
  website: <FaGlobeAmericas className="text-yellow-400" />,
};

export default function ContactInfo() {
  const contactInfo = useInformation(state => state.contactInfo);
  return (
    <div className="flex flex-col gap-3 w-full">
      {contactInfo.map((contact: { type: string; value: string }, idx: number) => (
        <div
          key={idx}
          className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-2 text-gray-200 border-l-4 border-yellow-500"
        >
          {iconMap[contact.type] || <FaEnvelope className="text-yellow-400" />}
          {contact.type === "email" ? (
            <a href={`mailto:${contact.value}`} className="underline text-yellow-300">
              {contact.value}
            </a>
          ) : (
            <a
              href={contact.value}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-300"
            >
              {contact.value.replace("https://", "")}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
