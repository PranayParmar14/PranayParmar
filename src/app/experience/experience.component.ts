import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule],
})
export class ExperienceComponent {
  timelineData = [
    {
      date: 'Feb 14, 2023',
      title: "Valentine's Day",
      details: 'A day to celebrate love and affection.',
    },
    {
      date: 'Sep 7, 2023',
      title: 'Project Launch',
      details: 'Official launch of our new project.',
    },
    {
      date: 'Mar 7, 2023',
      title: 'Team Meetup',
      details: 'Annual team meetup and strategy planning.',
    },
  ];

  isMobile = false; // Default to false
  activePoint: number | null = null;
  hoveredPoint: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768; // Only runs in the browser
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  openModal(index: number) {
    this.activePoint = this.activePoint === index ? null : index; // Toggle modal
    Modal.open();
  }

  closeModal() {
    this.activePoint = null;
  }
}
