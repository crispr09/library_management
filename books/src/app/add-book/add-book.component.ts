import { Component } from '@angular/core';
import { Books } from '../models/books';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  book: Books = new Books();
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}
  saveBook() {
    this.userService.saveBook(this.book).subscribe(
      (data) => {
        console.log(data);

        this.goToBooksList();
      },
      (error) => console.log(error)
    );
  }

  goToBooksList() {
    this.router.navigate(['/books']);
  }

  onSubmit() {
    console.log(this.book);
    this.saveBook();
  }
}
