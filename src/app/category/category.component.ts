import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private router: Router) {}
    
      closePage() {
        this.router.navigate(['/landing'])
      }

      playBestResponse() {
        this.router.navigate(['/best-response'])
      }
}
