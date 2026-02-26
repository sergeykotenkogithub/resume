export type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
};

export type Skill = {
  id: string;
  name: string;
  level: 'basic' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'tools' | 'other';
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
};

export type Candidate = {
  name: string;
  title: string;
  summary: string;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  contact: {
    email: string;
    github: string;
    telegram?: string;
    phone?: string;
    location?: string;
  };
};
