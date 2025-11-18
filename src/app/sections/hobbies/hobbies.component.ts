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
      title: 'AI',
      icon: 'fa-brain',
      image: 'assets/hobbies/ai.jpg',
      description:
        'Exploring machine learning applications, from LLMs to image generation and model training.',
    },
    {
      title: '3D Printing',
      icon: 'fa-cubes',
      image: 'assets/hobbies/3d.jpg',
      description:
        'Designing and printing models since 2012, specializing in engineering and sci-fi themed builds.',
    },
    {
      title: 'Coding',
      icon: 'fa-code',
      image: 'assets/hobbies/github.jpg',
      description:
        'Building new ideas, tinkering with technologies, and contributing to open-source.',
    },
  ];
}
