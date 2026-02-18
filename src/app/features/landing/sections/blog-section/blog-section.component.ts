import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { CardComponent, CardData } from '../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [SectionHeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './blog-section.component.html',
})
export class BlogSectionComponent {
  readonly blogCards: CardData[] = [
    {
      image: 'assets/trading.jpg',
      imageAlt: 'Metalloid trading floor with commodity charts and screens',
      category: 'Trading',
      title: 'The Future of Metals Trading in Global Markets',
      excerpt:
        'Discover how Metalloid is leveraging advanced analytics and strategic partnerships to navigate volatile commodity markets and deliver value.',
      date: 'Jan 15, 2026',
      readTime: '5 min read',
    },
    {
      image: 'assets/road.png',
      imageAlt: 'Metalloid road infrastructure project in remote mining region',
      category: 'Infrastructure',
      title: 'Building Resilient Supply Chains Through Better Roads',
      excerpt:
        'Our latest infrastructure initiative connects remote mining sites with key logistics corridors, reducing transport time by 40%.',
      date: 'Feb 3, 2026',
      readTime: '4 min read',
    },
    {
      image: 'assets/planing team.png',
      imageAlt: 'Metalloid planning team reviewing project blueprints',
      category: 'Strategy',
      title: 'Strategic Planning: How We Deliver Complex Mining Projects',
      excerpt:
        'Behind every successful excavation is a meticulous planning process. Our expert team breaks down the methodology that sets Metalloid apart.',
      date: 'Feb 12, 2026',
      readTime: '6 min read',
    },
  ];
}
