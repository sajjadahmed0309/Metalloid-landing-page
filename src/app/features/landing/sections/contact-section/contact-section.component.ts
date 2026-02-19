import { Component, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface CountryCode {
  name: string;
  iso: string;
  dial: string;
}

export const COUNTRIES: CountryCode[] = [
  { name: 'UAE',           iso: 'AE', dial: '+971' },
  { name: 'Saudi Arabia',  iso: 'SA', dial: '+966' },
  { name: 'Qatar',         iso: 'QA', dial: '+974' },
  { name: 'Kuwait',        iso: 'KW', dial: '+965' },
  { name: 'Oman',          iso: 'OM', dial: '+968' },
  { name: 'Bahrain',       iso: 'BH', dial: '+973' },
  { name: 'DRC',           iso: 'CD', dial: '+243' },
  { name: 'Cameroon',      iso: 'CM', dial: '+237' },
  { name: 'Mali',          iso: 'ML', dial: '+223' },
  { name: 'Pakistan',      iso: 'PK', dial: '+92'  },
  { name: 'Guinea',        iso: 'GN', dial: '+224' },
  { name: 'South Africa',  iso: 'ZA', dial: '+27'  },
  { name: 'Nigeria',       iso: 'NG', dial: '+234' },
  { name: 'Egypt',         iso: 'EG', dial: '+20'  },
  { name: 'Kenya',         iso: 'KE', dial: '+254' },
  { name: 'United Kingdom',iso: 'GB', dial: '+44'  },
  { name: 'United States', iso: 'US', dial: '+1'   },
  { name: 'France',        iso: 'FR', dial: '+33'  },
  { name: 'China',         iso: 'CN', dial: '+86'  },
  { name: 'India',         iso: 'IN', dial: '+91'  },
];

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  private readonly fb = new FormBuilder();

  readonly countries = COUNTRIES;
  readonly selectedCountry = signal<CountryCode>(COUNTRIES[0]);
  readonly phonePlaceholder = computed(() => `${this.selectedCountry().dial} 000-000-000`);

  readonly form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName:  ['', [Validators.required, Validators.minLength(2)]],
    email:     ['', [Validators.required, Validators.email]],
    phone:     ['', Validators.required],
    message:   ['', [Validators.required, Validators.minLength(10)]],
    privacy:   [false, Validators.requiredTrue],
  });

  submitted = signal(false);

  selectCountry(iso: string): void {
    const found = COUNTRIES.find(c => c.iso === iso);
    if (found) this.selectedCountry.set(found);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}
