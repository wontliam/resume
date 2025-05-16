import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Experience } from '../models/experience';
import { Technology } from '../models/technology';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  technologies: Technology[] = [
    // BE
    { name: 'ASP.NET Core', category: 'BE',           icon: 'https://dotnet.microsoft.com/static/images/dotnet-core.svg' },
    { name: 'C#',           category: 'BE',           icon: 'https://docs.microsoft.com/en-us/dotnet/csharp/images/csharp-logo.png' },
    { name: 'C/C++',        category: 'BE',           icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png' },
    { name: 'Java',         category: 'BE',           icon: 'https://www.oracle.com/a/ocom/img/cb88-java-logo-001.jpg' },
    { name: 'Node.js',      category: 'BE',           icon: 'https://nodejs.org/static/images/logo.svg' },
    { name: 'Python',       category: 'BE',           icon: 'https://www.python.org/community/logos/python-logo-master-v3-TM.png' },
  
    // FE
    { name: 'Angular',      category: 'FE',           icon: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { name: 'CSS',          category: 'FE',           icon: 'https://www.w3.org/Style/CSS/Overview.en.html' },
    { name: 'HTML',         category: 'FE',           icon: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png' },
    { name: 'JavaScript',   category: 'FE',           icon: 'https://www.javascript.com/images/icons/javascript.svg' },
    { name: 'React',        category: 'FE',           icon: 'https://reactjs.org/logo-og.png' },
    { name: 'Syncfusion',   category: 'FE',           icon: 'https://www.syncfusion.com/content/images/logo.png' },
    { name: 'TypeScript',   category: 'FE',           icon: 'https://www.typescriptlang.org/assets/images/icons/apple-touch-icon.png' },
    { name: 'Vue',          category: 'FE',           icon: 'https://vuejs.org/images/logo.png' },
  
    // DB
    { name: 'MongoDB',      category: 'DB',           icon: 'https://www.mongodb.com/assets/images/global/leaf.svg' },
    { name: 'MSSQL',        category: 'DB',           icon: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads/media/sql-server-logo.png' },
    { name: 'MySQL',        category: 'DB',           icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'PostgreSQL',   category: 'DB',           icon: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
  
    // DevOps
    { name: 'AWS',          category: 'DevOps',       icon: 'https://aws.amazon.com/favicon.ico' },
    { name: 'Azure',        category: 'DevOps',       icon: 'https://azure.microsoft.com/svghandler/azure-logo.svg' },
    { name: 'Docker',       category: 'DevOps',       icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
    { name: 'Kubernetes',   category: 'DevOps',       icon: 'https://kubernetes.io/images/favicon.png' },
  
    // Productivity
    { name: 'ClickUp',      category: 'Productivity', icon: 'https://www.clickup.com/favicon.ico' },
    { name: 'Git',          category: 'Productivity', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Jira',         category: 'Productivity', icon: 'https://wac-cdn.atlassian.com/dam/jcr:3c0f4a2b-5d1e-4a7b-8c6f-9d0e5f3f1b2c/jira-software-logo.png' },
    { name: 'Trello',       category: 'Productivity', icon: 'https://trello.com/favicon.ico' },
  
    // Analytics (BI)
    { name: 'PowerBI',      category: 'Analytics',    icon: 'https://powerbi.microsoft.com/favicon.ico' },
  ];  

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
            'Quickly adapted to a complex legacy codebase, enhancing the patient portal with new features and bug fixes.',
            'Collaborated with the team at Valley Medical Center to understand the existing architecture and identify areas for improvement.',
            'Actively enhance the administration\'s experience by constant communication and deep understanding of the business needs.',
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
            'Contributed 5+ reports for the executive team, enhancing data visibility and decision-making.',
            'Reduced the time needed for the executive team to generate reports by 4 hours per week and add on extra statistics for team leaders.',
            'The company\'s billable hours increased by 30% while the teams maintained their productivity and work-life balance.',
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
            'Refactor and enhance over 100 legacy query-based reports.',
            'Implemented new reports using PowerBI, improving data visualization and accessibility.',
            'Collaborated with the team to understand the existing reports and fix any bugs.',
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
            'Collaborated with a team of 5 developers to deliver a scheduling portal for teachers at TTU.',
            'The new system allows teachers to streamline their scheduling process and improve communication with students through emails.',
            'Replace the legacy system that was built in the 90s and was not user-friendly.',
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
            'Collaborated with a team of 3 developers and 1 project manager to replace the legacy system that was not user-friendly and was a bottle neck to Monroe Infrared\'s productivity.',
            'Implemented a map view that allows inspectors to see the locations of their inspections and the status of each inspection.',
            'Implemented a new reporting system that allows customers to customize their reports and reduce the amount of requests for the administration team.',
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

  get groupedTechnologies() {
    const grouped: { [key: string]: string[] } = {};
  
    // Group the technologies by category
    for (const tech of this.technologies) {
      if (!grouped[tech.category]) {
        grouped[tech.category] = [];
      }
      grouped[tech.category].push(tech.name);
    }
  
    return grouped;
  }
  
  public formatCategoryName(key: string): string {
    switch (key) {
      case 'FE': return 'Frontend';
      case 'BE': return 'Backend';
      case 'DB': return 'Databases';
      case 'DevOps': return 'DevOps';
      case 'Productivity': return 'Productivity';
      case 'Design': return 'Design Tools';
      case 'Analytics': return 'Business Intelligence'; // Keep Analytics but display as BI
      case 'Other': return 'Other';
      default: return key;
    }
  }
  
  get sortedCategories() {
    const order = ['BE', 'FE', 'DB', 'DevOps', 'Productivity', 'Analytics']; // Adjusted order
    return order;
  }
  
}
