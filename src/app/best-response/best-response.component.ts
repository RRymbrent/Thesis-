import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-best-response',
  templateUrl: './best-response.component.html',
  styleUrls: ['./best-response.component.css']
})
export class BestResponseComponent {
  constructor(private router: Router) {}

  backPage() {
    this.router.navigate(['/category'])
  }
}
