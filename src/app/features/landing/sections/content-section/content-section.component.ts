import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContentSectionData {
  heading: string;
  description: string;
  bodyText?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  theme?: 'white' | 'gray';
}

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent {
  @Input({ required: true }) data!: ContentSectionData;
}
