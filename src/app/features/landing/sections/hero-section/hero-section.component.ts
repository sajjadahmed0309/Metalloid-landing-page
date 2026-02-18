import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyRef } from '@angular/core';

interface HeroSlide {
  image: string;
  imageAlt: string;
  label: string;
  headline1: string;
  headline2: string;
  subtitle: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  readonly slides: HeroSlide[] = [
    {
      image: 'assets/intial photo.png',
      imageAlt: 'AXEOR mining facility with renewable energy infrastructure',
      label: 'AXEOR Mining',
      headline1: 'Powering Value.',
      headline2: 'Shaping the Future.',
      subtitle: 'Building Long-Life Resource Assets Across Africa',
    },
    {
      image: 'assets/middle photo.png',
      imageAlt: 'AXEOR open-cast mining operations from aerial view',
      label: 'AXEOR Mining',
      headline1: 'Advanced Exploration.',
      headline2: 'Proven Results',
      subtitle: 'Leveraging cutting-edge technology for resource discovery',
    },
    {
      image: 'assets/last photo.png',
      imageAlt: 'AXEOR sustainable mining with modern infrastructure',
      label: 'AXEOR Mining',
      headline1: 'Sustainable Operations.',
      headline2: 'Global impact.',
      subtitle: 'Committed to responsible mining practices',
    },
  ];

  activeSlide = signal(0);

  ngOnInit(): void {
    this.startAutoplay();
    this.destroyRef.onDestroy(() => this.stopAutoplay());
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goToSlide(index: number): void {
    this.activeSlide.set(index);
    this.stopAutoplay();
    this.startAutoplay();
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.activeSlide.update(i => (i + 1) % this.slides.length);
    }, 5000);
  }

  private stopAutoplay(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
