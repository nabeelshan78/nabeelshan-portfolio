
export interface Project {
  title: string;
  techStack: string[];
  description: string;
  githubLink: string;
  thumbnailUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  preview: string;
  content: string;
}
