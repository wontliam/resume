import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Experience } from '../models/experience';
import { Technology } from '../models/technology';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  technologies: Technology[] = [
    // FE : UI frameworks and languages
    { name: 'HTML',         category: 'FE',           icon: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png' },
    { name: 'CSS',          category: 'FE',           icon: 'https://www.w3.org/Style/CSS/Overview.en.html' },
    { name: 'JavaScript',   category: 'FE',           icon: 'https://www.javascript.com/images/icons/javascript.svg' },
    { name: 'TypeScript',   category: 'FE',           icon: 'https://www.typescriptlang.org/assets/images/    icons/apple-touch-icon.png' },
    { name: 'React',        category: 'FE',           icon: 'https://reactjs.org/logo-og.png' },
    { name: 'Angular',      category: 'FE',           icon: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { name: 'Vue',          category: 'FE',           icon: 'https://vuejs.org/images/logo.png' },
    { name: 'Syncfusion',   category: 'FE',           icon: 'https://www.syncfusion.com/content/images/logo.png' },

    // BE : Server-side frameworks/languages
    { name: 'Node.js',      category: 'BE',           icon: 'https://nodejs.org/static/images/logo.svg' },
    { name: 'ASP.NET Core', category: 'BE',           icon: 'https://dotnet.microsoft.com/static/images/dotnet-core.svg' },

    // DB : DB technologies
    { name: 'MongoDB',      category: 'DB',           icon: 'https://www.mongodb.com/assets/images/global/leaf.svg' },
    { name: 'PostgreSQL',   category: 'DB',           icon: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
    { name: 'MySQL',        category: 'DB',           icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'MSSQL',        category: 'DB',           icon: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads/media/sql-server-logo.png' },

    // DevOps : Containers, CI/CD, deployment tools
    { name: 'Docker',       category: 'DevOps',       icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },

    // Productivity : General developer tools
    { name: 'Git',          category: 'Productivity', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Jira',         category: 'Productivity', icon: 'https://wac-cdn.atlassian.com/dam/jcr:3c0f4a2b-5d1e-4a7b-8c6f-9d0e5f3f1b2c/jira-software-logo.png' },
    { name: 'Trello',       category: 'Productivity', icon: 'https://trello.com/favicon.ico' },
    { name: 'ClickUp',      category: 'Productivity', icon: 'https://www.clickup.com/favicon.ico' },

    // Design : UI/UX design platforms
    { name: 'Figma',        category: 'Design',       icon: 'https://www.figma.com/favicon.ico' },
    
    // Analytics : BI and data visualization
    { name: 'PowerBI',      category: 'Analytics',    icon: 'https://powerbi.microsoft.com/favicon.ico' },

    // Other
  ]

  professional_experience: Experience[] = [
    // Job
    {
      jobTitle: 'Full Stack Software Engineer',
      company: 'Steele Consulting Inc.',
      location: 'El Paso, TX',
      duration: 'Dec 2022 - Present',
      descriptions: [
        'Adapted quickly across 5+ full-stack projects, contributing to teams of 2–20+ with varying workflows, technologies, and business domains.',
        'Proactively led end-to-end feature development based on high-level requirements - scoping database changes, designing API flows, and building frontend components while continuously learning and iterating through feedback.',
        'Took initiative in identifying improvement opportunities, aligning updates with user feedback to enhance client satisfaction and bridge communication between stakeholders and engineering.',
      ],
      projects: [
        // Project
        {
          company: 'Traxión - Traxporta',
          projectName: 'FastTrax',
          projectType: 'Logistics Web Portal',
          duration: 'Sep 2024 – Present',
          descriptions: [
            'Designed and implemented frontend components using Vue.js with Syncfusion UI.',
            'Built RESTful APIs using ASP.NET Core to manage route data and dispatch operations.',
            'Collaborated with stakeholders to refine project scope and delivery timeline.',
          ],
          technologies: this.getTechnologies(this.technologies, ['Angular', 'Node.js', 'MongoDB', 'Jira', 'Syncfusion']),
        },
        // Project
        {
          company: 'Valley Medical Center',
          projectName: 'Patient Portal',
          projectType: 'Patient Web Portal',
          duration: 'May 2024 – Aug 2024',
          descriptions: [
            'Patient',
          ],
          technologies: this.getTechnologies(this.technologies, ['ASP.NET Core', 'MSSQL', 'Trello']),
        },
        // Project
        {
          company: 'Steele Consulting Inc.',
          projectName: 'Internal Reporting System',
          projectType: 'Reporting Portal',
          duration: 'Feb 2024 – May 2024',
          descriptions: [
            'Report',
          ],
          technologies: this.getTechnologies(this.technologies, ['ASP.NET Core', 'MSSQL', 'ClickUp']),
        },
        // Project
        {
          company: 'Lument',
          projectName: 'Reporting Portal',
          projectType: 'Reporting Portal',
          duration: 'Oct 2023 – Feb 2024',
          descriptions: [
            'Portal.',
          ],
          technologies: this.getTechnologies(this.technologies, ['PostgreSQL', 'PowerBI']),
        },
        // Project
        {
          company: 'Texas Tech University',
          projectName: 'Student Calendar',
          projectType: 'Web Scheduling Application',
          duration: 'Aug 2023 – Oct 2023',
          descriptions: [
            'Calendar.',
          ],
          technologies: this.getTechnologies(this.technologies, ['Angular', 'Node.js', 'MSSQL']),
        },
        // Project
        {
          company: 'Monroe Infrared',
          projectName: 'Rewrite',
          projectType: 'Inspector - Customer Web Portal',
          duration: 'Jan 2023 – Jul 2023',
          descriptions: [
            'Rewrite.',
          ],
          technologies: this.getTechnologies(this.technologies, ['Angular', 'Node.js', 'MSSQL', 'ClickUp']),
        },
      ]
    },
    // Job
    {
      jobTitle: 'Software Engineer Intern',
      company: 'Steele Consulting Inc.',
      location: 'El Paso, TX',
      duration: 'Summer 2022',
      descriptions: [
        'Ranked as the top intern in a cohort of 10 graduates, earning a full-time offer based on exceptional performance.',
        'Built Steele-Frame, a shell framework that reduced project setup and onboarding time by 70% across 10+ projects.',
        'Contributed to agile development processes, collaborating with cross-functional teams to deliver features on time.',
      ],
      projects: [
        // Project
        {
          company: 'Steele Consulting Inc.',
          projectName: 'Steele-Frame',
          projectType: 'Web Application Shell',
          duration: 'Summer 2022',
          descriptions: [
            'A shell framework that helps developers to create new projects quickly and easily.',
            'Include the database schema, the backend API, and the frontend UI.',
            'The framework is built using ASP.NET Core, Angular, and MSSQL.',
          ],
          technologies: this.getTechnologies(this.technologies, ['Angular', 'Node.js', 'MSSQL', 'ClickUp']),
        }
      ]
    }
  ]

  constructor() {
    // Initialization logic can go here
  }

  ngOnInit() {
    // Component initialization logic can go here
  }

  onDownloadResume() {
    console.log('Download Resume button clicked');
  }

  private getTechnologies(allTechs: Technology[], names: string[]): Technology[] {
    return names.map(name => allTechs.find(tech => tech.name === name)!);
  }
}
