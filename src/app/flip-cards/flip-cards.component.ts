import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.scss']
})
export class FlipCardsComponent {
  constructor(private router: Router) {}
  
  backPage() {
    this.router.navigate(['/landing'])
  }

cards = [
  { question: "What is 'I love you' in Kapampangan?", answer: 'Kaluguran daka' },
  { question: "What is 'Good morning' in Kapampangan?", answer: 'Mayap a abak' },
  { question: "What is 'Thank you' in Kapampangan?", answer: 'Dakal a salamat' },
  { question: "What is 'How are you?' in Kapampangan?", answer: 'Komusta ka?' },
  { question: "What is 'Good evening' in Kapampangan?", answer: 'Mayap a bengi' },
  { question: "What is 'Goodbye' in Kapampangan?", answer: 'Pamanuli' },
];

flippedIndex: number | null = null;


onCardClick(index: number): void {
  // Toggle flip state for the clicked card
  if (this.flippedIndex === index) {
    this.flippedIndex = null;
    
  } else {
    this.flippedIndex = index;

  }
}
}
