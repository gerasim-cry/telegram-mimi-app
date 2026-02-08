export interface TechItem {
  name: string;
  slug: string;
  iconUrl?: string;
}

export const stack: TechItem[] = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Telegram", slug: "telegram" },
  { name: "Docker", slug: "docker" },
];
