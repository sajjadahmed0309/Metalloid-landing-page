import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SectionHeaderAlign = 'left' | 'center';
export type SectionHeaderTheme = 'light' | 'dark';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input() subheading = '';
  @Input() heading = '';
  @Input() description = '';
  @Input() align: SectionHeaderAlign = 'center';
  @Input() theme: SectionHeaderTheme = 'light';
}
