import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [NgbModule, CommonModule],
})
export class ExperienceComponent {
  //TIMELINE STUFF
  // events = [
  //   {
  //     date: 'Feb 14, 2023',
  //     title: "Valentine's Day",
  //     details: 'A day to celebrate love and affection.',
  //   },
  //   {
  //     date: 'Sep 7, 2023',
  //     title: 'Project Launch',
  //     details: 'Official launch of our new project.',
  //   },
  //   {
  //     date: 'Mar 7, 2023',
  //     title: 'Team Meetup',
  //     details: 'Annual team meetup and strategy planning.',
  //   },
  // ];
  // isMobile = false; // Default to false
  // activePoint: number | null = null;
  // hoveredPoint: number | null = null;
  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: Object,
  //   private modalService: NgbModal
  // ) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.isMobile = window.innerWidth <= 768; // Only runs in the browser
  //   }
  // }
  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.isMobile = window.innerWidth <= 768;
  //   }
  // }
  // openModalFunction(content: any, index: number) {
  //   this.activePoint = index; // Ensures `activePoint` is always a valid number
  //   this.modalService.open(content);
  // }
  // //function to close modal
  // closeModalFunction() {
  //   this.modalService.dismissAll();
  // }
}
