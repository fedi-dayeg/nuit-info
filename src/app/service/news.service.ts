import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class NewsService{

  news: Subject <object> = new Subject <object>();

  constructor(public _http: HttpClient) {
  this._http.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=league+of+legends&from=2019-11-05&apiKey=5d90851babd748fdb2621c8e1db6fcef`, {
      headers: new HttpHeaders({ "x-requested-with": "XMLHTTPResponse" })
    }).subscribe((result) => {
      this.news.next(result);
    });

   }

}
