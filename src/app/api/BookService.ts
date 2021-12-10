import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpClientModule} from "@angular/common/http";
import {Book} from "./Book";

@Injectable()
export class BookService{

  constructor(private http: HttpClient) {
  }

  rootURL = 'http://localhost:8080/bookstore-back/api/books/';

  //Get Count of Books
  public countBook(): Observable<number> {
    //console.log(this.rootURL + 'count/');
    return this.http.get<number>(this.rootURL + 'count');
 }

 //Get All Books
  public getAllBook(): Observable<Book[]> {
    //console.log(this.rootURL);
    return this.http.get<Book[]>(this.rootURL);
  }

  //Get Book by id
  public GetBookById(id: number): Observable<Book> {
    //console.log(this.rootURL);
    return this.http.get<Book>(this.rootURL+id);
  }

  //Delete Book by id
  public DeleteBook(id: number): Observable<any>{
    console.log(this.rootURL+id);
    return this.http.delete(this.rootURL+id);
  }


}
