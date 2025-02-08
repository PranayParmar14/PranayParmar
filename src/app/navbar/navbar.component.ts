import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor() {}
  isDarkMode: boolean = false;


  ngOnInit() {const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
}

toggleTheme(): void {
  this.isDarkMode = !this.isDarkMode;
  localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  this.applyTheme();
}
applyTheme(): void {
  const theme = this.isDarkMode ? 'dark-theme' : 'light-theme';
  document.body.className = theme; // Apply the theme class to the <body> tag
}
}
