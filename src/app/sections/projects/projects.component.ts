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
      name: 'Fuel Reconciliation Engine',
      image: 'assets/projects/p1.jpg',
      tech: 'Java · Snowflake · Python · AWS',
      link: 'https://github.com/TU_USUARIO',
    },
    {
      name: 'Sales Smoothing Algorithm',
      image: 'assets/projects/p2.jpg',
      tech: 'Java · BigDecimal · Machine Learning',
      link: 'https://github.com/TU_USUARIO',
    },
    {
      name: 'Portfolio Website',
      image: 'assets/projects/p3.jpg',
      tech: 'Angular · SCSS · Web Animations',
      link: '#',
    },
  ];
}
