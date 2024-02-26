import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent {
  bookId: number = 0;
  book: Books = new Books();

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
    this.userService.getBookById(this.bookId).subscribe((data) => {
      this.book = data;
    });
  }
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
}
