import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  quotes:Quote[] = [
     new Quote('Lorna Kirui','Life', ' Success isnt always about greatness. Its about consistency. Consistent hard work leads to success. Greatness will come.Education is not preparation for life; education is life itself.', 'John Dewey', new Date(5, 15, 2021)),
    new Quote('Gibson','Education', 'Perseverance is the hard work you do after you get tired of doing the hard work you already did.', 'Faith Craig', new Date(5, 15, 2021)),
  ]
  i: number;
  constructor() { }
  ngOnInit(): void {
  }
  thumbsup(i) {
    this.quotes[i].thumbsup++
  }
  thumbsdown(i) {
    this.quotes[i].thumbsdown++
  }
  saveQuote(newQuote) {
    this.quotes.unshift(newQuote);
  }
  delete(i){
    this.quotes.splice(i, 1);
  }
}
