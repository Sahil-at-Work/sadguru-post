export interface Post {
  id: string;
  title: string;
  images: PostImage[];
  caption: string;
  class: ClassLevel;
  subject: Subject;
  topics: string[];
  createdAt: string;
  likes: number;
  bookmarked: boolean;
}

export interface PostImage {
  url: string;
  caption: string;
}

export type ClassLevel = '8th' | '9th' | '10th' | '11th' | '12th';

export type Subject = 
  | 'Mathematics' 
  | 'Science' 
  | 'Physics' 
  | 'Chemistry' 
  | 'Biology' 
  | 'History' 
  | 'Geography' 
  | 'English' 
  | 'Computer Science' 
  | 'Economics';

export interface FilterState {
  classLevels: ClassLevel[];
  subjects: Subject[];
  topics: string[];
  searchQuery: string;
}