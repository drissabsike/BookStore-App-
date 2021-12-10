import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../api/Book";
import {BookService} from "../api/BookService";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {

  //Injection
  constructor(private router: Router,
              private bookService: BookService,
              private route: ActivatedRoute) { }

  book: Book = new Book();

  //Display book when you choose a book By id => Clique
  ngOnInit(): void {
    this.getBook(this.route.snapshot.paramMap.get('bookId'));
  }

  bookId: any = this.route.snapshot.paramMap.get('bookId');
  x: number = +this.bookId;

  delete() {
    //console.log(this.x);
    //console.log(typeof this.x);
    this.bookService.DeleteBook(this.bookId).subscribe(
      data => {
        console.log('Book deleted Id: ', this.bookId);
        this.router.navigate(['/book-list']);
      }
    );
  };

  //Get Book By id
  getBook(id: any) {
    this.bookService.GetBookById(id)
      .subscribe(data => {
        this.book = data;
        console.log(data);
      });
  }


}
