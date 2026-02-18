import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardData {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link?: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input({ required: true }) card!: CardData;
}
