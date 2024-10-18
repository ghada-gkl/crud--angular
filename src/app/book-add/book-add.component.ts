import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';
@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  @Input() lastId=0;
  @Output() BookCreated= new EventEmitter<Book>();
  
  addBook(title: string, author: string, price: number) {
    
    const newBook = new Book(

      this.lastId! +1,
      title,
      author,
      price);
    ;
    this.BookCreated.emit(newBook);

   console.log(newBook);
    //property binding [prop]=var
    //Two_way binding pour var,inputs [(ng module)]
  }}



