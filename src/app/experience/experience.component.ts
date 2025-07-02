import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExperienceComponent {
  timelineData = [
    {
      date: 'Summer 2022',
      company: 'Montgomery County',
      role: 'IT Intern',
    },
    {
      date: 'Summer 2023 - Spring 2024',
      company: 'Bucks County',
      role: 'IT Intern',
    },
    {
      date: 'Spring 2024 - Spring 2025',
      company: 'Nationwide Insurance',
      role: 'Software Engineering Intern',
    },
    {
      date: 'Spring 2025 - Present',
      company: 'Nationwide Insurance',
      role: 'Software Engineer',
    },
  ];

  selectedItem: any = null;

  openModal(item: any) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}
