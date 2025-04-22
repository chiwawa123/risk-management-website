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
      image: "assets/images/dp2.jpeg",
      title: "Building Risk Intelligence",
      subtitle: "Proactive risk management for a secure future",
      buttonText: "",
      buttonLink: "",
    },
    {
      image: "assets/images/dp1.jpeg",
      title: "Identify. Assess. Mitigate.",
      subtitle: "Comprehensive risk management solutions",
      buttonText: "",
      buttonLink: "",
    },
    {
      image: "assets/images/risk.jpeg",
      title: "Protecting What Matters",
      subtitle: "Strategic risk oversight for institutional excellence",
      buttonText: "",
      buttonLink: "",
    },
  ]

  currentSlide = 0
  slideInterval: any
  imagePositions: number[] = [0, 0, 0] // Track position for each slide
  animationIntervals: any[] = []

  ngOnInit(): void {
    // Start the slideshow
    this.startSlideShow()

    // Initialize vertical animation for the first slide
    this.startVerticalAnimation(this.currentSlide)
  }

  ngOnDestroy() {
    this.stopSlideShow()
    this.stopAllAnimations()
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
    // Stop animation for current slide
    this.stopAnimation(this.currentSlide)

    // Move to next slide
    this.currentSlide = (this.currentSlide + 1) % this.slides.length

    // Reset position and start animation for new slide
    this.imagePositions[this.currentSlide] = 0
    this.startVerticalAnimation(this.currentSlide)
  }

  prevSlide() {
    // Stop animation for current slide
    this.stopAnimation(this.currentSlide)

    // Move to previous slide
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length

    // Reset position and start animation for new slide
    this.imagePositions[this.currentSlide] = 0
    this.startVerticalAnimation(this.currentSlide)
  }

  goToSlide(index: number) {
    if (index === this.currentSlide) return

    // Stop animation for current slide
    this.stopAnimation(this.currentSlide)

    // Move to selected slide
    this.currentSlide = index

    // Reset position and start animation for new slide
    this.imagePositions[this.currentSlide] = 0
    this.startVerticalAnimation(this.currentSlide)
  }

  // Start vertical animation for a specific slide
  startVerticalAnimation(slideIndex: number) {
    // Reset any existing animation for this slide
    this.stopAnimation(slideIndex)

    // Create new animation interval
    this.animationIntervals[slideIndex] = setInterval(() => {
      // Only animate up to 15% to avoid showing too much of the bottom
      if (this.imagePositions[slideIndex] < 15) {
        this.imagePositions[slideIndex] += 0.15
      }
    }, 100)
  }

  // Stop animation for a specific slide
  stopAnimation(slideIndex: number) {
    if (this.animationIntervals[slideIndex]) {
      clearInterval(this.animationIntervals[slideIndex])
    }
  }

  // Stop all animations
  stopAllAnimations() {
    this.animationIntervals.forEach((interval, index) => {
      if (interval) {
        clearInterval(interval)
      }
    })
  }

  // Get the current position for a slide
  getImagePosition(slideIndex: number): number {
    return this.imagePositions[slideIndex] || 0
  }

}
