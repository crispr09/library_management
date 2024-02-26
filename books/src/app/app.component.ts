import { Component } from '@angular/core';
import { Books } from './models/books';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'books';
  book: any;
}
