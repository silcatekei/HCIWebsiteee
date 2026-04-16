
import type React from 'react';

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}
