import { Component } from '@angular/core';
import { Books } from '../models/books';
import { Borrow } from '../models/borrow';
import { UserServiceService } from '../user-service.service';
import { BorrowService } from '../borrow.service';
@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrl: './borrow-book.component.css',
})
export class BorrowBookComponent {
  books: Books[] = [];
  borrow: Borrow = new Borrow();
  constructor(
    private booksService: UserServiceService,
    private borrowService: BorrowService
  ) {}
  public borrowBook(bookId: number, noOfCopies: number, bookName: string) {
    this.borrow.bookId = bookId;
    console.log('borrowBook ' + bookId);
    if (noOfCopies > 0) {
      this.borrowService.borrowBook(this.borrow).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
      this.getBooks();
    } else {
      confirm('No Copy Available to Borrow ' + bookName);
    }
  }
  ngOnInit(): void {
    this.getBooks();
  }
  public getBooks() {
    this.booksService.findAll().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }
}
