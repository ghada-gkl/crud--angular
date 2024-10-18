import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';
import { BookEditComponent } from "../book-edit/book-edit.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  selectedBook: Book | null = null;
  titlr="liste de livres";
  books = [ new Book(1,"Atomic Habits","James Clear",35),
    new Book(2,"Atomic Habits 2","James Clear",35),
    new Book(3,"Atomic Habits 3","James Clear",35)
  ];
  action="";
  
  changeAction(action : string){
    this.action = action;
  }
  addBook(book:Book){
    this.books=[...this.books,book];
    this.changeAction("");
    // 3malna tab jdid sabina fih kdim w zedna kteb jdid
  }
  action1="";
  

  editAction(book: Book) {
    if (book) {
        this.action1 = 'edit';
        this.selectedBook = new Book(book.id, book.title, book.author, book.price); 
    } 
}

  
  onBookEdited(updatedBook: Book) {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    this.action1 = "";
    this.selectedBook = null;
}}
