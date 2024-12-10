import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Navigation } from 'swiper/modules';
import Swiper from 'swiper';

Swiper.use([Navigation]);

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent implements AfterViewInit {
  images = [
    '../../../assets/images/carousel-item1.jpg',
    '../../../assets/images/carousel-item2.jpg',
    '../../../assets/images/carousel-item1.jpg',
    '../../../assets/images/carousel-item2.jpg',
    '../../../assets/images/carousel-item1.jpg',
    '../../../assets/images/carousel-item2.jpg',
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Swiper
      new Swiper('.swiper', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
}
