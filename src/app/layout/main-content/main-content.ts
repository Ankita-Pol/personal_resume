import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
  @Input() personal: any;

  @Input() education: any;
  @Input() projects: any;
  @Input() experience: any;
  @Input() achievements: any;
  @Input() extracurricular: any;
  @Input() references: any;

}
