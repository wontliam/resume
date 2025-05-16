import { Technology } from "./technology";

export interface Project {
  company: string;
  projectName: string;
  projectType?: string;
  duration: string;
  descriptions: string[];
  technologies: Technology[];
}