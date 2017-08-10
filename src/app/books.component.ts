import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'books',
  templateUrl: './booksComponent.html',
  providers : [BooksService]
})
export class BooksComponent  { 
    books = [];
    errorMessage : string;
    
    constructor(private _booksService : BooksService){}
    
    ngOnInit(){
        this._booksService.getBooks()
            .subscribe((resBooksData) => this.books = resBooksData,
                       (resBooksError) => this.errorMessage = resBooksError);
    }
}