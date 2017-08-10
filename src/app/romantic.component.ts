import { Component, OnInit } from '@angular/core';
import { RomanticService } from './romantic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'romantic',
  templateUrl: './romanticComponent.html',
  providers : [RomanticService]
})
export class RomanticComponent  { 
    books = [];
    errorMessage : string;
    
    constructor(private _romanticService : RomanticService, private router: Router){}
    
    ngOnInit(){
        this._romanticService.getBooks()
            .subscribe((resBooksData) => this.books = resBooksData,
                       (resBooksError) => this.errorMessage = resBooksError);
    }
    
    
}