import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MapMarker {
  id: string;
  city: string;
  address: string;
  top: string;
  left: string;
}

export interface MapTab {
  id: string;
  label: string;
  markers: MapMarker[];
}

@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-section.component.html',
})
export class MapSectionComponent {
  readonly tabs: MapTab[] = [
    {
      id: 'headquarters',
      label: 'Headquarters',
      markers: [
        {
          id: 'abu-dhabi',
          city: 'Abu Dhabi',
          address: 'Tower 81, 5th Floor, Tawi Shouf Street, Al Nahyan, East 19/2, Abu Dhabi, UAE',
          top: '40%',
          left: '44%',
        },
      ],
    },
    {
      id: 'central-africa',
      label: 'Central Africa',
      markers: [
        {
          id: 'drc',
          city: 'DRC – Kinshasa',
          address: 'Operations hub, Democratic Republic of Congo',
          top: '63%',
          left: '27%',
        },
        {
          id: 'cameroon',
          city: 'Cameroon',
          address: 'Exploration office, Yaoundé',
          top: '59%',
          left: '21%',
        },
      ],
    },
    {
      id: 'western-africa',
      label: 'Western Africa',
      markers: [
        {
          id: 'mali',
          city: 'Mali',
          address: 'Mining project site, Bamako region',
          top: '50%',
          left: '12%',
        },
        {
          id: 'guinea',
          city: 'Guinea',
          address: 'Bauxite exploration, Conakry',
          top: '54%',
          left: '10%',
        },
      ],
    },
  ];

  activeTabId = signal<string>('headquarters');
  activeMarkerId = signal<string | null>('abu-dhabi');

  get activeTab(): MapTab {
    return this.tabs.find(t => t.id === this.activeTabId()) ?? this.tabs[0];
  }

  selectTab(id: string): void {
    this.activeTabId.set(id);
    const tab = this.tabs.find(t => t.id === id);
    this.activeMarkerId.set(tab?.markers[0]?.id ?? null);
  }

  toggleMarker(id: string): void {
    this.activeMarkerId.update(current => (current === id ? null : id));
  }

  getMarkerData(id: string): MapMarker | undefined {
    return this.activeTab.markers.find(m => m.id === id);
  }
}
