import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-testimonials',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  @Input() testimonial:any;

}
