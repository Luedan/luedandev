export type lang = "es" | "en";

export type ContactInfo = Array<{
  type: "email" | "phone" | "linkedin" | "github" | "website";
  value: string;
}>;

export type SkillsInfo = Array<{
  skill: string;
  level: "beginner" | "intermediate" | "advanced";
}>;

export type SoftSkillsInfo = Array<{
  skill: string;
  level: "beginner" | "intermediate" | "advanced";
}>;

export type ExperienceInfo = Array<{
  jobTitle: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
}>;

export type EducationInfo = Array<{
  degree: string;
  fieldOfStudy?: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
}>;

export type CoursesInfo = Array<{
  title: string;
  institution: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}>;

export type PersonalInfo = {
  name: string;
  title: string;
  picture?: string;
  birthDate?: string;
  dni?: string;
  address?: string;
  website?: string;
  aboutMe?: string;
};

export type InformationState = {
  language: lang;
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  skillsInfo: SkillsInfo;
  softSkillsInfo: SoftSkillsInfo;
  experienceInfo: ExperienceInfo;
  educationInfo: EducationInfo;
  coursesInfo: CoursesInfo;
};