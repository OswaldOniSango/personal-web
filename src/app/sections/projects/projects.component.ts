import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Project {
  name: string;
  image: string;
  tech: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Comunicaciones Baseball',
      image: 'assets/projects/comunicaciones-baseball-home.png',
      tech: 'Next.js · Supabase · PostgreSQL',
      link: 'https://comu-page.vercel.app/es',
    },
    {
      name: 'Invenco fuel managment',
      image: 'assets/projects/invenco.jpg',
      tech: 'Java · Snowflake · Python · AWS',
    },
    {
      name: 'DLMS - Lenovo',
      image: 'assets/projects/lenovo.png',
      tech: 'Java · Spring boot· PostgreSQL',
    },
  ];
}
