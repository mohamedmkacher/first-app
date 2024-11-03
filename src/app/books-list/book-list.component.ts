import { Component } from '@angular/core';
import { BookAddComponent } from '../book-add/book-add.component';
import { Book } from '../model/book';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BooksListComponent {
  title = 'Liste des livres :';
  books = [
    new Book(
      1,
      'La plus secrète mémoire des hommes',
      'Mohamed Mbougar Sar',
      38
    ),
    new Book(2, 'Dix-neuf', 'Sami Mokaddem', 35),
    new Book(3, 'Le sang des anges', 'Sami Mokaddem', 30),
    new Book(4, 'Le secert des Barcides', 'Sami Mokaddem', 34),
    new Book(5, 'Girl, interrupted ', 'Susanna Kaysen', 20),
    new Book(6, 'Le silence nait sur les paupières', 'Nejia Sghir', 18),
    new Book(7, 'Invisible kid', 'Atef Atia', 22),
    new Book(8, 'La cité écarlate', 'Sami Mokaddem', 15),
    new Book(9, 'Une femme sans écriture', 'Saber Mansouri', 33),
    new Book(10, 'Enfant de salaud', 'Sorj Chalandon', 50),
    new Book(11, 'The celestine prophecy', 'James Redfield', 36),
    new Book(12, 'They both die at the end', 'Adam Silvera', 37),
    new Book(13, 'Push', 'Ashley Audrain', 42),
  ];
  action = '';

  changeAction(action: string) {
    this.action = action;
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
    this.changeAction('');
  }
  getBook(id: number): Book {
    return this.books[id];
  }
  modifyBook(book: Book) {
    this.books[book.id - 1] = book;

    this.changeAction('');
  }
  deleteBook(indexOfDeleted: number) {
    this.books = this.books.filter((book) => book.id != indexOfDeleted + 1);
    this.books
      .filter((book) => book.id > indexOfDeleted + 1)
      .map((book) => book.id--);
  }
}
