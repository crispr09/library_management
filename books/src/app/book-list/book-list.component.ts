import { Component } from '@angular/core';
import { Books } from '../models/books';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: Books[] = [];

  constructor(
    private booksService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this.booksService.findAll().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }
  clickConfirmMethod(bookId: number) {
    if (confirm('Are you sure to delete ' + bookId)) {
      this.deleteBook(bookId);
    }
  }
  public deleteBook(bookId: number) {
    console.log('deleteBook ' + bookId);
    this.booksService.deleteBook(bookId).subscribe((data) => {
      this.getBooks();
    });
  }
  public editBook(bookId: number) {
    console.log('editBook ' + bookId);

    this.goToEditBook(bookId);
    //this.getBooks();
  }
  goToEditBook(bookId: number) {
    this.router.navigate(['edit-book', bookId]);
  }
  viewBook(bookId: number) {
    this.router.navigate(['view-book', bookId]);
  }
}
