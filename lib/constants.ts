export const TECH_STACKS = {
  Frontend: ["React", "Next.js", "Vue.js", "Angular", "Svelte"],
  Backend: ["Node.js", "Python", "Java", "Ruby", "PHP", "Go", "Rust"],
  Mobile: ["React Native", "Flutter", "iOS", "Android"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  Other: ["GraphQL", "REST API", "TypeScript", "JavaScript"],
} as const;

export const TECH_STACKS_LIST = Object.values(TECH_STACKS).flat();
