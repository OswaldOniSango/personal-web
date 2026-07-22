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
      web: 'https://arizmendi.ar/',
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
      web: 'https://www.avalith.net/',
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
      web: 'https://ketos-delphin.com/',
      points: [
        'Develop backend services for a microservices-based enterprise platform covering Human Resources, Time & Attendance, and Payroll.',
        'Design and implement RESTful APIs with Java, Spring Boot, PostgreSQL, and Redis supporting HR, attendance, and workforce management.',
        'Build integrations with external systems through REST APIs, processing employee clock-in/clock-out events, payroll interfaces, CSV generation, and secure FTP file transfers.',
        'Develop and maintain scheduled background jobs using an in-house job framework with cron scheduling and multithreading for large-scale business processing.',
        'Troubleshoot production issues by analyzing logs, complex SQL queries, and database records while implementing backend enhancements and production data fixes.',
        'Collaborate with frontend, product, and QA teams using Jira, GitLab, and Postman.'
      ]
    },

    {
      company: 'Svitla Systems, Inc.',
      role: 'Software & Data Engineer',
      yearsLabel: 'Jul 2023 - Present',
      logo: 'assets/svitla.svg',
      location: 'Remote',
      web: 'https://svitla.com/',
      points: [
        'Design, orchestrate, and manage end-to-end ELT pipelines in Snowflake using Streams, Tasks, Stored Procedures, Views, and UDFs integrated with Java services.',
        'Develop reusable Java frameworks that integrate with Snowflake UDFs, enabling standardized data processing services across multiple projects.',
        'Deliver automated reconciliation, exception-handling, and real-time data processing workflows for operational reporting.',
        'Led the migration from Jenkins to GitHub Actions for Snowflake deployments, including Flyway migrations, stored procedure releases, and JAR publishing to Snowflake stages.',
        'Developed an automated end-to-end testing framework using Java and JDBC that validates Snowflake stored procedures and data pipelines through SQL execution, significantly reducing manual testing efforts.',
        'Contribute to Kafka → MongoDB streaming pipelines, Java/Go microservices, and Angular-based data delivery.'
      ]
    }  
  ];

}
