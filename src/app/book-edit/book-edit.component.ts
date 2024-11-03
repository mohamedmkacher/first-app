import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent {
  @Input() book = new Book(0, '', '', 0);
  @Output() bookEdited = new EventEmitter<Book>();

  editBook(id: number, title: string, author: string, price: number) {
    const editedBook = new Book(id, title, author, price);
    this.bookEdited.emit(editedBook);
  }
}
