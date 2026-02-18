import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ContentSectionComponent, ContentSectionData } from './sections/content-section/content-section.component';
import { MapSectionComponent } from './sections/map-section/map-section.component';
import { CompetenciesSectionComponent } from './sections/competencies-section/competencies-section.component';
import { ResponsibleSectionComponent } from './sections/responsible-section/responsible-section.component';
import { PartnersSectionComponent } from './sections/partners-section/partners-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ContentSectionComponent,
    MapSectionComponent,
    CompetenciesSectionComponent,
    ResponsibleSectionComponent,
    PartnersSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  readonly aboutSection: ContentSectionData = {
    heading: 'AXEOR Mining',
    description:
      'AXEOR is an independent, international natural resources company with a strong footprint across Africa and emerging markets. We develop, operate, and invest in high-quality mining and resource projects, creating sustainable value for our people, partners, and host communities',
    bodyText:
      'through long-life operations and responsible practices.',
    imageSrc: 'assets/Dumber Truck.png',
    imageAlt: 'AXEOR haul truck operating at an active mining site',
    imagePosition: 'right',
    primaryButton: { label: 'Our process', href: '#competencies' },
    secondaryButton: { label: 'Get in touch', href: '#contact' },
    theme: 'white',
  };
}
