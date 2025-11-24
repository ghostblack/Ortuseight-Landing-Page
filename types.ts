export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeroSectionData {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
