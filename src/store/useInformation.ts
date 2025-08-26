"use client";
import { Information, InformationState, lang } from "@/types/information";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const spanishInformation: InformationState = {
  language: "es",
  personalInfo: {
    name: "Luis Atencia",
    title: "Líder Técnico - Desarrollador Full Stack",
    picture: "",
    birthDate: "1995-08-10",
    website: "https://luedan.dev",
    aboutMe: `He desempeñado un papel clave en el desarrollo y análisis de múltiples proyectos, aportando experiencia técnica y habilidades estratégicas. He mantenido y optimizado aplicaciones en producción, garantizando su rendimiento y eficiencia a largo plazo. Como mentor, impulsé el crecimiento profesional y la productividad de varios equipos. Además, lideré investigaciones para la implementación de nuevas tecnologías, mejorando los procesos de desarrollo. También contribuí activamente a la definición de objetivos estratégicos y a la dirección general de la empresa.`,
  },
  contactInfo: [
    { type: "email", value: "luedandev@gmail.com" },
    { type: "linkedin", value: "https://www.linkedin.com/in/luedand2/" },
    { type: "github", value: "https://github.com/luedan" },
  ],
  skillsInfo: [
    { skill: "JavaScript", level: "advanced" },
    { skill: "TypeScript", level: "intermediate" },
    { skill: "React", level: "intermediate" },
    { skill: "Node.js", level: "intermediate" },
  ],
  softSkillsInfo: [
    { skill: "Comunicación", level: "advanced" },
    { skill: "Trabajo en equipo", level: "advanced" },
    { skill: "Resolución de problemas", level: "advanced" },
  ],
  experienceInfo: [
    {
      jobTitle: "Líder Técnico",
      company: "Horbath Technologies",
      startDate: "2024-01-01",
      endDate: "Actualidad",
      description:
        "Liderazgo en proyectos de desarrollo de software, mentoría de equipos y toma de decisiones técnicas.",
    },
    {
      jobTitle: "Líder Técnico",
      company: "Wow Desarrollos Digitales",
      startDate: "2021-01-01",
      endDate: "2024-01-01",
      description:
        "Responsable del desarrollo y mantenimiento de aplicaciones web, coordinación de equipos y aseguramiento de la calidad del código.",
    },
    {
      jobTitle: "Tutor Académico",
      company: "Fundación Estudiar y Trabajar",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      description:
        "Guía y apoyo a estudiantes en su formación en desarrollo de software.",
    },
  ],
  educationInfo: [
    {
      degree: "Ingeniería de Sistemas",
      // fieldOfStudy: "Desarrollo de Software",
      institution:
        "Universidad Nacional Experimental Politécnica de las Fuerzas Armadas",
      startDate: "2014-09-26",
      endDate: "2020-03-26",
      description:
        "Formación en desarrollo de software, bases de datos y metodologías ágiles.",
    },
  ],
  coursesInfo: [
    {
      institution: "Udemy",
      title: "NestJS: Desarrollos Backend Escalable con Node",
      description:
        "Desarrollo de aplicaciones backend escalables utilizando NestJS y Node.js.",
    },
    {
      institution: "Udemy",
      title: "NestJS + Microservicios: Aplicaciones Escalables y Modulares",
      description:
        "Creación de aplicaciones modulares y escalables con microservicios usando NestJS.",
    },
    {
      institution: "Udemy",
      title: "NestJS: Microservicios con NestJS, AWS, Docker Profesional",
      description:
        "Implementación de microservicios profesionales con NestJS, AWS y Docker.",
    },
    {
      institution: "Udemy",
      title: "React Native CLI: Aplicaciones Nativas para iOS y Android",
      description:
        "Desarrollo de aplicaciones móviles nativas para iOS y Android con React Native CLI.",
    },
    {
      institution: "Udemy",
      title: "Principios Solid y Clean Code",
      description:
        "Aplicación de principios SOLID y buenas prácticas de Clean Code en el desarrollo de software.",
    },
    {
      institution: "Udemy",
      title: "Aprende Programación Backend en C# .NET",
      description:
        "Fundamentos y desarrollo de aplicaciones backend con C# y .NET.",
    },
    {
      institution: "Udemy",
      title: "AZ-204 Desarrollo de soluciones para Microsoft Azure",
      description:
        "Desarrollo y despliegue de soluciones en la nube utilizando Microsoft Azure.",
    },
  ],
};

const englishInformation: InformationState = {
  language: "en",
  personalInfo: {
    name: "Luis Atencia",
    title: "Technical Lead - Full Stack Developer",
    picture: "",
    birthDate: "1995-08-10",
    website: "https://luedan.dev",
    aboutMe: `I have played a key role in the development and analysis of multiple projects, bringing technical expertise and strategic skills. I have maintained and optimized production applications, ensuring their long-term performance and efficiency. As a mentor, I fostered professional growth and productivity in several teams. Additionally, I led research for the implementation of new technologies, improving development processes. I also actively contributed to the definition of strategic objectives and the overall direction of the company.`,
  },
  contactInfo: [
    { type: "email", value: "luedandev@gmail.com" },
    { type: "linkedin", value: "https://www.linkedin.com/in/luedand2/" },
    { type: "github", value: "https://github.com/luedan" },
  ],
  skillsInfo: [
    { skill: "JavaScript", level: "advanced" },
    { skill: "TypeScript", level: "intermediate" },
    { skill: "React", level: "intermediate" },
    { skill: "Node.js", level: "intermediate" },
  ],
  softSkillsInfo: [
    { skill: "Communication", level: "advanced" },
    { skill: "Teamwork", level: "advanced" },
    { skill: "Problem Solving", level: "advanced" },
  ],
  experienceInfo: [
    {
      jobTitle: "Technical Lead",
      company: "Horbath Technologies",
      startDate: "2024-01-01",
      endDate: "Present",
      description:
        "Leadership in software development projects, team mentoring, and technical decision-making.",
    },
    {
      jobTitle: "Technical Lead",
      company: "Wow Digital Developments",
      startDate: "2021-01-01",
      endDate: "2024-01-01",
      description:
        "Responsible for web application development and maintenance, team coordination, and code quality assurance.",
    },
    {
      jobTitle: "Academic Tutor",
      company: "Fundación Estudiar y Trabajar",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      description:
        "Guidance and support for students in their software development training.",
    },
  ],
  educationInfo: [
    {
      degree: "Systems Engineering",
      // fieldOfStudy: "Software Development",
      institution:
        "National Experimental Polytechnic University of the Armed Forces",
      startDate: "2014-09-26",
      endDate: "2020-03-26",
      description:
        "Training in software development, databases, and agile methodologies.",
    },
  ],
  coursesInfo: [
    {
      institution: "Udemy",
      title: "NestJS: Scalable Backend Development with Node",
      description:
        "Development of scalable backend applications using NestJS and Node.js.",
    },
    {
      institution: "Udemy",
      title: "NestJS + Microservices: Scalable and Modular Applications",
      description:
        "Creation of modular and scalable applications with microservices using NestJS.",
    },
    {
      institution: "Udemy",
      title: "NestJS: Microservices with NestJS, AWS, Professional Docker",
      description:
        "Implementation of professional microservices with NestJS, AWS, and Docker.",
    },
    {
      institution: "Udemy",
      title: "React Native CLI: Native Applications for iOS and Android",
      description:
        "Development of native mobile applications for iOS and Android with React Native CLI.",
    },
    {
      institution: "Udemy",
      title: "SOLID Principles and Clean Code",
      description:
        "Application of SOLID principles and Clean Code best practices in software development.",
    },
    {
      institution: "Udemy",
      title: "Learn Backend Programming in C# .NET",
      description:
        "Fundamentals and development of backend applications with C# and .NET.",
    },
    {
      institution: "Udemy",
      title: "AZ-204 Developing Solutions for Microsoft Azure",
      description:
        "Development and deployment of cloud solutions using Microsoft Azure.",
    },
  ],
};

export const useInformation = create<Information>()(
  persist(
    (set) => ({
      language: "es",
      spanish: spanishInformation,
      english: englishInformation,
    }),
    { name: "useInformation" }
  )
);

export const getInformationByLanguage = (language: lang) => {
  return useInformation.getState()[language === "es" ? "spanish" : "english"];
};
