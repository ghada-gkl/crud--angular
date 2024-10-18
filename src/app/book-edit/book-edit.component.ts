import { Component,Output,Input,EventEmitter } from '@angular/core';
import { Book } from '../model/book';
@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input() lastId=0;
  @Input() book!: Book;
  @Output() BookEdited= new EventEmitter<Book>();
  editBook(title: string, author: string, price: number) {
    
    const newBook = new Book(

      this.book.id,
      title,
      author,
      price);
    
    this.BookEdited.emit(newBook);
   console.log(newBook);

}}
