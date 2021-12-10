import { Component, OnInit } from '@angular/core';
import {BookService} from "../api/BookService";
import {map} from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  nbBooks: any;

  book : any;

  books = [] as any;

  rootURL = 'http://localhost:8080/bookstore-back/api/books/';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
      this.getCount();
      this.GetAllBooks();
  }

  getCount(){
    //console.log('debut')
    this.bookService.countBook().subscribe(
      data => {
        //console.log(data);
        this.nbBooks = data;
      });
  }

  GetAllBooks(){
    //console.log('debut getting all books:')
    this.bookService.getAllBook().subscribe(books => this.books = books);
  }





}
