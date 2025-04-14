import { Component, OnDestroy, OnInit } from '@angular/core';
import { Slide } from '../../interfaces/slide';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy {

  slides: Slide[] = [
    {
      image: "assets/images/7.jpg",
      title: "Building Risk Intelligence",
      subtitle: "Proactive risk management for a secure future",
      buttonText: "",
      buttonLink: "",
    },
    {
      image: "assets/images/4.jpg",
      title: "Identify. Assess. Mitigate.",
      subtitle: "Comprehensive risk management solutions",
      buttonText: "",
      buttonLink: "",
    },
    {
      image: "assets/images/3.jpg",
      title: "Protecting What Matters",
      subtitle: "Strategic risk oversight for institutional excellence",
      buttonText: "",
      buttonLink: "",
    },
  ]

  currentSlide = 0
  slideInterval: any

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-slide every 5 seconds
  }

  ngOnDestroy() {
    this.stopSlideShow()
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval)
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
  }

  goToSlide(index: number) {
    this.currentSlide = index
  }

}
