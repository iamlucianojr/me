export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string; // Markdown content
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Name of the icon
}
