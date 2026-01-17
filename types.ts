export type ViewState = 
  | 'HOME' 
  | 'EXPLORE' 
  | 'PROFILE'
  | 'GROWTH' 
  | 'BUSINESS' 
  | 'LOGIN' 
  | 'SIGNUP' 
  | 'DASHBOARD_TALENT' 
  | 'DASHBOARD_ADMIN';

export interface Skill {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category?: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Talent {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  category: string;
  skills: string[];
  image: string;
  verified: boolean;
  location?: string;
  bio?: string;
  responseTime?: string;
  languages?: string[];
  completedProjects?: number;
  portfolio?: PortfolioItem[];
  reviewsList?: Review[];
}

export interface UserProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  avatar: string;
  verified: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum UserRole {
  TALENT = 'TALENT',
  BUSINESS = 'BUSINESS',
  ADMIN = 'ADMIN'
}