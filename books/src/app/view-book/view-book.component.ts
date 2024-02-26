import { Component } from '@angular/core';
import { Books } from '../models/books';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Borrow } from '../models/borrow';
import { BorrowService } from '../borrow.service';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
})
export class ViewBookComponent {
  id!: number;
  book: Books = new Books();
  borrow: Borrow[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: UserServiceService,
    private borrowService: BorrowService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['bookId'];
    // console.log(this.id);
    this.book = new Books();
    this.bookService.getBookById(this.id).subscribe((data) => {
      this.book = data;
      console.log(data);
    });

    this.getBorrowHistory(this.id);
  }

  private getBorrowHistory(bookId: number) {
    this.borrowService.getBookBorrowHistory(bookId).subscribe((data) => {
      this.borrow = data;
      console.log(data);
    });
  }
}
