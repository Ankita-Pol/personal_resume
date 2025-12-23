import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  @Input() personal: any;
  @Input() skills: any;
  @Input() tools: any;

  // ✅ ADD THIS
  @Input() links: any;
}
