import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Invenco fuel managment',
      image: 'assets/projects/invenco.jpg',
      tech: 'Java · Snowflake · Python · AWS',
      link: 'https://github.com/TU_USUARIO',
    },
    {
      name: 'DLMS - Lenovo',
      image: 'assets/projects/lenovo.png',
      tech: 'Java · Spring boot· PostgreSQL',
      link: 'https://github.com/TU_USUARIO',
    }
  ];
}
