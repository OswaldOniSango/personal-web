import { Component } from '@angular/core';
import { HobbiesComponent } from './sections/hobbies/hobbies.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from "./sections/experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HobbiesComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
