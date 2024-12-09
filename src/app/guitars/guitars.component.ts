import { Component } from '@angular/core';
import { SlideInterface } from '../accessories/slider/image.interfaces';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrl: './guitars.component.css'
})
export class GuitarsComponent {
  slides: SlideInterface[] = [
    { src: '/assets/slider/1.png', title: 'beach' },
    { src: '/assets/slider/2.png', title: 'boat' },
    { src: '/assets/slider/3.png', title: 'forest' },
    { src: '/assets/slider/4.png', title: 'city' },
    { src: '/assets/slider/5.png', title: 'italy' },
  ];
}
