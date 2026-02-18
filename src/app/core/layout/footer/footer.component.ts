import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly companyLinks = [
    { label: 'About', href: '#about' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Sustainability', href: '#responsible' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly resourceLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'FAQs', href: '#faqs' },
  ];
}
