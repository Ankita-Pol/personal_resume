import { Component, OnInit } from '@angular/core';
import { ResumeService } from './core/services/resume.service';
import { Sidebar } from './layout/sidebar/sidebar';
import { MainContent } from './layout/main-content/main-content';
import { CommonModule } from '@angular/common';
// import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Sidebar, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {

  resumeData: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResumeData().subscribe((data) => {
      this.resumeData = data;
    });
  }
}
