import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  hobbies = [
    {
      title: 'Machine Learning',
      icon: 'fa-brain',
      image: 'assets/hobbies/machinelearning.jpg',
      description:
        'Exploring machine learning applications, I am currently studing mathematics for machine learning.',
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
