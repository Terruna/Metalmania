import { Component, Input } from '@angular/core';

import { SlideInterface } from '../accessories/slider/image.interfaces';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {

  @Input() slides: SlideInterface[] = [ { src: '/assets/slider/1.png', title: 'beach' },
    { src: '/assets/slider/2.png', title: 'boat' },
    { src: '/assets/slider/3.png', title: 'forest' },
    { src: '/assets/slider/4.png', title: 'city' },
    { src: '/assets/slider/5.png', title: 'italy' },];

  // currentIndex: number = 0;
  // timeoutId: any;

  // ngOnInit(): void {
  //   this.resetTimer();
  // }
  // ngOnDestroy() {
  //   if (typeof window !== 'undefined') {
  //     window.clearTimeout(this.timeoutId);
  //   }
  // }
  // resetTimer() {
  //   if (typeof window !== 'undefined') {
  //     if (this.timeoutId) {
  //       window.clearTimeout(this.timeoutId);
  //     }
  //     this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  //   }
  // }

  // goToPrevious(): void {
  //   const isFirstSlide = this.currentIndex === 0;
  //   const newIndex = isFirstSlide
  //     ? this.slides.length - 1
  //     : this.currentIndex - 1;

  //   this.resetTimer();
  //   this.currentIndex = newIndex;
  // }

  // goToNext(): void {
  //   const isLastSlide = this.currentIndex === this.slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

  //   this.resetTimer();
  //   this.currentIndex = newIndex;
  // }

  // goToSlide(slideIndex: number): void {
  //   this.resetTimer();
  //   this.currentIndex = slideIndex;
  // }

  // getCurrentSlideUrl() {
  //   const currentImageUrl = `${this.slides[this.currentIndex].src}`;
  //   console.log('Current Slide URL:', currentImageUrl);  
  //   return currentImageUrl;
  // }



  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.clearTimeout(this.timeoutId);
    }
  }

  resetTimer() {
    if (typeof window !== 'undefined') {
      if (this.timeoutId) {
        window.clearTimeout(this.timeoutId);
      }
      this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
    }
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `${this.slides[this.currentIndex].src}`;
  }

}
