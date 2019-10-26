import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes:string[];

  constructor(){
    this.quotes = ['"If you judge people, you have no time to love them. Mother Teresa "','"The greatest wealth is to live content with little. Plato "']
  }

}
