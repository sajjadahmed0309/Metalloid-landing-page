import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Sustainability', href: '#responsible' },
    { label: 'Contact', href: '#contact' },
    { label: 'Metalloid', href: '#' },
  ];

  isMenuOpen = signal(false);
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
