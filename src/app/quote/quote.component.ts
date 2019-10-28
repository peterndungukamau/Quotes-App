import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [ 
   new Quote ('Mother Teresa', 'If you judge people, you have no time to love them.', 'Peter', 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', 0, 0, new Date(2019,11,12)),
    new Quote ('Plato', 'The greatest wealth is to live content with little.', 'Paswell', 'There are two things a person should never be angry at, what they can help, and what they cannot.', 0, 0, new Date(2019,11,12)),
    new Quote ('-Martin Luther King Jr.', '“Love is the only force capable of transforming an enemy into friend.” ', 'Teka', '“Only in the darkness can you see the stars.”', 0, 0, new Date(2019,11,12)),
  ];

  addNewQuote(quote){
 let quoteLength = this.quotes.length;
  quote.publishDate = new Date(quote.publishDate)
  this.quotes.push(quote)
  }

  deleteQuote(isRead, index){
  if (isRead){
  let toDelete = confirm(`Are You sure you want to delete quotes from ${this.quotes[index].author}?`)

  if (toDelete){
    this.quotes.splice(index, 1)
  }
  
  }
  }

  toggleDetails(index){
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  constructor() { }

  ngOnInit() {
  }

}
