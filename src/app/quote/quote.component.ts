import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote = [
    {author:'Mother Teresa', quote:'If you judge people, you have no time to love them.', submitter:'Peter', more:'another quote from Teresa'},
    {author:'Plato', quote:'The greatest wealth is to live content with little.', submitter:'Paswell', more:'another quote from Plato'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
