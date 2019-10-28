import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();

  quoteDelete(read:boolean){
   this.isRead.emit(read);
  }
  quoteUpvote(){
   this.quote.upvote += 1
  }

  quoteDownvote(){
    this.quote.downvote += 1
   }
  constructor() { }

  ngOnInit() {
  }

}
