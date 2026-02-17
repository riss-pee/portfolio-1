
export interface Education {
  year: string;
  qualification: string;
  institution: string;
  percentage: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Language' | 'Frontend' | 'Backend' | 'Tool' | 'Other';
}

export interface Certification {
  title: string;
  description: string;
}
