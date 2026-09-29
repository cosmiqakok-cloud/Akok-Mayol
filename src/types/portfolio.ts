export interface Skill {
  id: string;
  name: string;
  category: 'cybersecurity' | 'programming' | 'tools' | 'soft-skills';
  level: string; // e.g. "Core Proficiency", "Intermediate", "Advanced"
  description: string;
  topics: string[];
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  demoType?: 'calculator' | 'portscanner' | 'encryptor' | 'website';
  githubUrl?: string;
  status: 'Completed' | 'Active Development' | 'Prototype';
  completedDate: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  department?: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}
