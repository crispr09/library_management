import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './user-service.service';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

@NgModule({
  declarations: [AppComponent, AddBookComponent, BookListComponent, EditBookComponent, ViewBookComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
