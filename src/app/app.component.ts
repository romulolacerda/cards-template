import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onCardButtonClicked() {
    console.log('Card Button Clicked!');
    // Chamada HTTP
  }
}
