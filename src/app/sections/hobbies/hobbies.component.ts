import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

interface Hobby {
  title: string;
  icon: string;
  image: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  hobbies: Hobby[] = [
    {
      title: 'Machine Learning',
      icon: 'fa-brain',
      image: 'assets/hobbies/machinelearning.jpg',
      description:
        'Exploring machine learning applications and building interactive experiments like my neural network visualizer.',
      link: 'https://oswaldonisango.github.io/Neural-network/neural-network-visualizer.html',
      linkLabel: 'Open visualizer',
    },
    {
      title: 'Baseball',
      icon: 'fa-baseball-bat-ball',
      image: 'assets/hobbies/baseball.webp',
      description:
        'Playing and following baseball. I play at the amateur level in Buenos Aires.',
    },
    {
      title: 'Coding',
      icon: 'fa-code',
      image: 'assets/hobbies/coding.png',
      description:
        'Building new ideas, explring backend technologies, contributing to open-source projects.',
    },
  ];
}
