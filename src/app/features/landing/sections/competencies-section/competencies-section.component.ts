import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Competency {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

@Component({
  selector: 'app-competencies-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competencies-section.component.html',
})
export class CompetenciesSectionComponent {
  readonly competencies: Competency[] = [
    {
      heading: 'Exploration',
      description:
        'Exploration is the foundation of AXEOR\'s growth strategy. Our teams specialize in advanced exploration program design, execution, and quality assurance. We manage integrated geological databases, conduct detailed resource evaluation, and apply advanced 2D and 3D geological modelling to unlock value across mineral systems.',
      imageSrc: 'assets/planing team.png',
      imageAlt: 'AXEOR exploration team conducting field surveys',
      imagePosition: 'right',
    },
    {
      heading: 'Development',
      description:
        'AXEOR transforms resources into bankable assets. We focus on resource estimation, metallurgical studies, mine design (open pit and underground), production scheduling, and economic modeling, including CAPEX, OPEX, and investment optimization to ensure robust project fundamentals.',
      imageSrc: 'assets/road.png',
      imageAlt: 'AXEOR mine development – open cast mine site',
      imagePosition: 'left',
    },
    {
      heading: 'Production',
      description:
        'Operational excellence drives AXEOR\'s production strategy. We deliver end-to-end technical solutions for mine construction, processing facilities, and supporting infrastructure, supported by strict quality control, operational planning, and cost efficiency.',
      imageSrc: 'assets/excavtor.png',
      imageAlt: 'AXEOR production site with heavy excavation equipment',
      imagePosition: 'right',
    },
    {
      heading: 'Trading & Procurement',
      description:
        'AXEOR operates a global trading and procurement platform with access to a diversified network of offtakers, suppliers, and logistics partners. Our expertise covers commodity marketing, procurement, vendor management, logistics coordination, and supply chain optimization.',
      imageSrc: 'assets/trading.jpg',
      imageAlt: 'AXEOR trading platform – commodity market monitoring on mobile',
      imagePosition: 'left',
    },
  ];
}
