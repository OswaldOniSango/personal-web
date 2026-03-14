import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  ViewChild,
  afterNextRender,
  inject,
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
  @ViewChild('spacePage') private spacePage?: ElementRef<HTMLElement>;

  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private animationFrameId: number | null = null;

  constructor() {
    afterNextRender(() => {
      this.syncEarthMotion();

      this.ngZone.runOutsideAngular(() => {
        const onViewportChange = () => this.requestEarthMotionSync();

        window.addEventListener('scroll', onViewportChange, { passive: true });
        window.addEventListener('resize', onViewportChange, { passive: true });

        this.destroyRef.onDestroy(() => {
          window.removeEventListener('scroll', onViewportChange);
          window.removeEventListener('resize', onViewportChange);

          if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
          }
        });
      });
    });
  }

  private requestEarthMotionSync(): void {
    if (this.animationFrameId !== null) {
      return;
    }

    this.animationFrameId = requestAnimationFrame(() => {
      this.animationFrameId = null;
      this.syncEarthMotion();
    });
  }

  private syncEarthMotion(): void {
    const root = this.spacePage?.nativeElement;

    if (!root) {
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset || 0;
    const scrollableHeight = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1,
    );
    const progress = Math.min(Math.max(scrollY / scrollableHeight, 0), 1);
    const isMobile = window.innerWidth <= 720;

    const rotation = progress * 280;
    const offsetY = progress * (isMobile ? 180 : 320);
    const offsetX = Math.sin(progress * Math.PI * 3) * (isMobile ? 12 : 24);
    const scale = 1 + progress * 0.08;
    const mapOffset = progress * -1400;
    const cloudOffset = progress * -1760;

    root.style.setProperty('--earth-rotation', `${rotation}deg`);
    root.style.setProperty('--earth-offset-y', `${offsetY}px`);
    root.style.setProperty('--earth-offset-x', `${offsetX}px`);
    root.style.setProperty('--earth-scale', `${scale}`);
    root.style.setProperty('--earth-map-offset', `${mapOffset}px`);
    root.style.setProperty('--earth-cloud-offset', `${cloudOffset}px`);
  }
}
