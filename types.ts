export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  githubLink: string;
  liveDemoLink?: string;
  videoEmbedUrl?: string;
  thumbnailUrl?: string;
  metrics?: ProjectMetric[];
  featured?: boolean;
  year: number;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'published' | 'under-review' | 'in-preparation';
  abstract?: string;
  arxivUrl?: string;
  pdfUrl?: string;
  tags: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
  description: string;
  imageUrl?: string;
  courses?: { name: string; description: string }[];
}
