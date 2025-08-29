import { lang } from "@/types/information";

const words = {
    EN: {
        aboutMe: "About me",
        experience: "Experience",
        skills: "Skills",
        education: "Education",
        projects: "Projects",
        contact: "Contact",
        courses: "Courses",
        technical: "Technical",
        soft: "Soft"
    },
    ES: {
        aboutMe: "Sobre mí",
        experience: "Experiencia",
        skills: "Habilidades",
        education: "Educación",
        projects: "Proyectos",
        contact: "Contacto",
        courses: "Cursos",
        technical: "Técnicas",
        soft: "Blandas"
    }
}

export const getWordsByLanguage = (lang: lang) => {
    return words[lang];
};