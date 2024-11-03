import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { BooksListComponent } from '../books-list/book-list.component';
import { Book } from '../model/book';
@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css',
})
export class BookAddComponent {
  @Input() lastId = 0;
  @Output() bookCreated = new EventEmitter<Book>();
  addBook(title: string, author: string, price: number) {
    const newBook = new Book(this.lastId + 1, title, author, price);
    this.bookCreated.emit(newBook);

  }
}
