import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  jobs = [
    {
      company: 'Arizmendi',
      role: 'Junior Programmer',
      yearsLabel: 'Nov 2021 - Dec 2022',
      logo: 'assets/arismendi-logo.jpeg',
      location: 'Argentina',
      points: [
        'Human Resources software development (Web App).',
        'Designed and maintained SQL databases (MySQL).',
        'Worked with Delphi and other backend technologies.',
        'Built solutions supporting internal HR systems used across Argentina.'
      ]
    },
     {
      company: 'Avalith',
      role: 'Java Software Developer',
      yearsLabel: 'Dec 2022 - Jul 2023',
      logo: 'assets/avalith.webp',
      location: 'Argentina · Remote',
      points: [
        'Worked for an important client in the banking industry.',
        'Developed a Spring-based microservice integrating GetGuru Cloud with IBM Watson Discovery.',
        'Followed Agile methodologies in a fully remote environment.',
        'Used technologies such as Java, Spring Boot, SQL, Hibernate and REST APIs.'
      ]
    },
    {
      company: 'Ketos Delphin',
      role: 'Java Developer',
      yearsLabel: 'Jun 2022 - Present',
      logo: 'assets/ketos-logo.jpg',
      location: 'Argentina · Remote',
      points: [
        'Backend development using Java with Spring framework to create RESTful APIs for a Human Resources system using microservices.',
        'Working with an important client from China.',
        'Building software using Jira, GitLab, PostgreSQL, Redis, Postman, Vue.js, JavaScript, and more.',
        'Contributed to multiple backend and integration processes.'
      ]
    },

    {
      company: 'Svitla Systems, Inc.',
      role: 'Software & Data Engineer',
      yearsLabel: 'Jul 2023 - Present',
      logo: 'assets/svitla.svg',
      location: 'Remote',
      points: [
        'Working on Invenco, a leading Java-based solution for fuel station management.',
        'Designing and managing end-to-end ELT pipelines on Snowflake using streams, stored procedures, views, and UDFs.',
        'Improved operational workflows ensuring efficient, scalable, and reliable reconciliation processes.',
        'Leading the migration from Jenkins to GitHub Actions for CI/CD automation and S3 deployments.',
        'Actively working on integration testing using Cypress.',
        'Contributing to a new initiative involving Kafka pipelines, Go microservices, and delivering processed data to an Angular-based frontend.'
      ]
    }  
  ];

}
