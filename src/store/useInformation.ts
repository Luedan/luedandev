"use client";
import { create } from "zustand";

type lang = "es" | "en";

type ContactInfo = Array<{
  type: "email" | "phone" | "linkedin" | "github" | "website";
  value: string;
}>;

type SkillsInfo = Array<{
  skill: string;
  level: "beginner" | "intermediate" | "advanced";
}>;

type SoftSkillsInfo = Array<{
  skill: string;
  level: "beginner" | "intermediate" | "advanced";
}>;

type ExperienceInfo = Array<{
  jobTitle: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
}>;

type EducationInfo = Array<{
  degree: string;
  fieldOfStudy?: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
}>;

type CoursesInfo = Array<{
  title: string;
  institution: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}>;

type PersonalInfo = {
  name: string;
  title: string;
  picture?: string;
  birthDate?: string;
  dni?: string;
  address?: string;
  website?: string;
};

type InformationState = {
  language: lang;
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  skillsInfo: SkillsInfo;
  softSkillsInfo: SoftSkillsInfo;
  experienceInfo: ExperienceInfo;
  educationInfo: EducationInfo;
  coursesInfo: CoursesInfo;
};

const useInformation = create<InformationState>()(() => ({
    language: "es",
    personalInfo: {
        name: "Luis Atencia",
        title: "Líder Técnico - Desarrollador Full Stack",
        picture: "",
        birthDate: "1995-08-10",
        website: "https://luedan.dev",
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
            degree: "Ingeniería en Sistemas",
            fieldOfStudy: "Desarrollo de Software",
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
            description: "Desarrollo de aplicaciones backend escalables utilizando NestJS y Node.js.",
        },
        {
            institution: "Udemy",
            title: "NestJS + Microservicios: Aplicaciones Escalables y Modulares",
            description: "Creación de aplicaciones modulares y escalables con microservicios usando NestJS.",
        },
        {
            institution: "Udemy",
            title: "NestJS: Microservicios con NestJS, AWS, Docker Profesional",
            description: "Implementación de microservicios profesionales con NestJS, AWS y Docker.",
        },
        {
            institution: "Udemy",
            title: "React Native CLI: Aplicaciones Nativas para iOS y Android",
            description: "Desarrollo de aplicaciones móviles nativas para iOS y Android con React Native CLI.",
        },
        {
            institution: "Udemy",
            title: "Principios Solid y Clean Code",
            description: "Aplicación de principios SOLID y buenas prácticas de Clean Code en el desarrollo de software.",
        },
        {
            institution: "Udemy",
            title: "Aprende Programación Backend en C# .NET",
            description: "Fundamentos y desarrollo de aplicaciones backend con C# y .NET.",
        },
        {
            institution: "Udemy",
            title: "AZ-204 Desarrollo de soluciones para Microsoft Azure",
            description: "Desarrollo y despliegue de soluciones en la nube utilizando Microsoft Azure.",
        },
    ],
}));
