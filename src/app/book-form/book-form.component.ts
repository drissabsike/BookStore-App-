import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})
export class BookFormComponent implements OnInit {

  constructor() { }

  book = {
    title: "Title 1",
    description: "description one",
    unitCost: "123",
    isbn: "123-3456-123",
    nbOfPages: "45",
    Language: "English",
    ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7QKmlYRi0o4g4JJ-amxl9SWe7Yx0qKuPlw&usqp=CAU"
  }

  ngOnInit(): void {
  }

}
