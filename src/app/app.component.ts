import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, LandingPageComponent, AboutComponent, ExperienceComponent ,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  constructor() {}
  isDarkMode: boolean = false;


  ngOnInit(): void {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }
  }

    toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isBrowser()) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  applyTheme(): void {
    const theme = this.isDarkMode ? 'dark-theme' : 'light-theme';
    document.body.className = theme; // Apply the theme class to the <body> tag
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
