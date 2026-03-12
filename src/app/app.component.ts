import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  afterNextRender,
} from '@angular/core';
import { HobbiesComponent } from './sections/hobbies/hobbies.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from "./sections/experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HobbiesComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  earthTransform = 'translate3d(0px, 0px, 0) rotate(0deg) scale(1)';
  earthMapOffset = '0px';
  earthCloudOffset = '0px';

  constructor() {
    afterNextRender(() => this.updateEarthMotion(window.scrollY || 0));
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateEarthMotion(window.scrollY || 0);
  }

  private updateEarthMotion(scrollY: number): void {
    const clampedScroll = Math.max(0, Math.min(scrollY, 2200));
    const rotation = clampedScroll * 0.085;
    const offsetY = Math.min(clampedScroll * 0.18, 240);
    const offsetX = Math.sin(clampedScroll / 260) * 24;
    const scale = 1 + Math.min(clampedScroll / 5000, 0.08);
    const mapOffset = -(clampedScroll * 0.32);
    const cloudOffset = -(clampedScroll * 0.4);

    this.earthTransform =
      `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${rotation}deg) scale(${scale})`;
    this.earthMapOffset = `${mapOffset}px`;
    this.earthCloudOffset = `${cloudOffset}px`;
  }
}
