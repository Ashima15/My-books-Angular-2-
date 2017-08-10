import { Component, OnInit } from '@angular/core';
import { MysteryService } from './mystery.service';

@Component({
  selector: 'mystery',
  templateUrl: './mysteryComponent.html',
  providers : [MysteryService]
})
export class MysteryComponent  { 
    books = [];
    errorMessage : string;
    
    constructor(private _mysteryService : MysteryService){}
    
    ngOnInit(){
        this._mysteryService.getBooks()
            .subscribe((resBooksData) => this.books = resBooksData,
                       (resBooksError) => this.errorMessage = resBooksError);
    }
}