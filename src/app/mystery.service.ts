import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class MysteryService {
    private _url : string = "api/mystery.json";
    
    constructor(private _http : Http) {}
    
    getBooks(){
        return this._http.get(this._url)
            .map((response:Response) => response.json())
            .catch(this._errorhandler);
    }
    
    _errorhandler(error : Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}