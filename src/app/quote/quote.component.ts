import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [ 
   new Quote ('Mother Teresa', 'If you judge people, you have no time to love them.', 'Peter', 'another quote from Teresa'),
    new Quote ('Plato', 'rrrr', 'Paswell', 'another quote from Plato'),
  ];

  toggleDetails(index){
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  constructor() { }

  ngOnInit() {
  }

}
