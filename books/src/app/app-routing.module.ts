import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'create-book',
    component: AddBookComponent,
  },
  {
    path: 'edit-book/:bookId',
    component: EditBookComponent,
  },
  {
    path: 'view-book/:bookId',
    component: ViewBookComponent,
  },
  {
    path: 'borrow-book',
    component: BorrowBookComponent,
  },
  {
    path: 'return-book',
    component: ReturnBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
