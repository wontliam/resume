import { Project } from "./project";

export interface Experience {
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  descriptions: string[];
  projects: Project[];
}