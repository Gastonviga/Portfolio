export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  size: 'small' | 'large'; // For Bento Grid
  link?: string;
}

export interface SkillItem {
  category: string;
  technologies: string[];
}