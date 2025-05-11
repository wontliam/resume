import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  company: string;
  projectName: string;
  projectType?: string; // Optional property
  duration: string; // Optional property
  descriptions: string[];
  technologies: string[];
}

interface Experience {
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  descriptions: string[];
  projects: Project[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  professional_experience: Experience[] = [
    {
      jobTitle: 'Full Stack Software Engineer',
      company: 'Steele Consulting Inc.',
      location: 'El Paso, TX',
      duration: 'Dec 2022 - Present',
      descriptions: ['Blah blah', 'Blah blah'],
      projects: [
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
          technologies: ['Vue', 'Node.js', 'MongoDB'],
        },
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
          technologies: ['Vue', 'Node.js', 'MongoDB'],
        },
      ]
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'Steele Consulting Inc.',
      location: 'El Paso, TX',
      duration: 'Summer 2022',
      descriptions: ['Blah blah', 'Blah blah'],
      projects: [
        {
          company: 'Steele Consulting Inc.',
          projectName: 'Steele-Frame',
          projectType: 'Web Application Shell',
          duration: 'Summer 2022',
          descriptions: [
            'Blah blah',
            'Blah blah'
          ],
          technologies: ['Angular', 'Node.js'],
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
}
