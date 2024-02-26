import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Books } from './models/books';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8099/admin/books';
  }
  public saveBook(book: Books) {
    return this.http.post<Books>(this.usersUrl, book);
  }
  public findAll(): Observable<Books[]> {
    return this.http.get<Books[]>(this.usersUrl);
  }

  deleteBook(bookId: number): Observable<Object> {
    return this.http.delete(`${this.usersUrl}/${bookId}`);
  }
  getBookById(bookId: number): Observable<Books> {
    return this.http.get<Books>(`${this.usersUrl}/${bookId}`);
  }
}
