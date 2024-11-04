import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookProps, BookResponseProps } from '../interface/book.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  books: BookProps[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<BookResponseProps>('http://localhost:3000/api/book/books')
      .subscribe(({ books }) => {

        this.books = books;
        console.log(this.books);
      },
        (error: any) => {
          console.error('Error al obtener usuarios:', error);
        }
      );
  }
}
