import { Component } from '@angular/core';
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
      title: 'Software Engineer Intern',
      details:
        'Worked on migrating pipelines and integrating CI/CD workflows at Nationwide.',
    },
    {
      title: 'Hackathon Participant',
      details:
        'Built a recognition platform during an enterprise-wide hackathon.',
    },
    {
      title: 'AI Translator Project',
      details:
        'Developed a full-stack AI-powered translator using ChatGPT Whisper.',
    },
  ];

  activePoint: number | null = null;

  openModal(index: number): void {
    this.activePoint = index;
  }

  closeModal(): void {
    this.activePoint = null;
  }
}
