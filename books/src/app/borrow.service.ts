import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Books } from './models/books';
import { Observable } from 'rxjs';
import { Borrow } from './models/borrow';

@Injectable({
  providedIn: 'root',
})
export class BorrowService {
  private browseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.browseUrl = 'http://localhost:8080/borrow';
  }

  getBookBorrowHistory(bookId: number): Observable<Borrow[]> {
    return this.httpClient.get<Borrow[]>(`${this.browseUrl}/book/${bookId}`);
  }
}
