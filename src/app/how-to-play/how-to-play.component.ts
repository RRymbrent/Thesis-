import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.css']
})
export class HowToPlayComponent {
    constructor(private router: Router) {}
  
    closePage() {
      this.router.navigate(['/landing'])
    }

    playPage() {
      this.router.navigate(['/play'])
    }
}
