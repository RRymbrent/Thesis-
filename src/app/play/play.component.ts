import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {
  constructor(private router: Router) {}
  
    closePage() {
      this.router.navigate(['/landing'])
    }

    categoryPage() {
      this.router.navigate(['/category'])
    }

    playFlipcards() {
      this.router.navigate(['/flip-cards'])
    }

  cards = Array(10).fill('Card');

  
}
