import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavService } from 'src/app/shared/service/nav.service';
import { ColorScssService } from 'src/app/shared/service/color-scss.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  public blogData: any;
  mainNews: object[] = [];
  singlePiece: object = {};
  secondaryNews: object[] = [];
  subscription: Subscription;
  news: object;
  mustContainString: string = "Legends";
  mustContainStringTwo: string = "Riot";

  constructor(public navServices: NavService, public colorPicker: ColorScssService, public _news: NewsService) {
    this.subscription = this._news.news.subscribe((newValue) => {
      this.news = newValue;
      let j = 0;
      for (let i = 0; i < this.news["articles"].length; i++) {
        if (this.news["articles"][i]["title"].length <= 100 && (this.news["articles"][i]["description"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainStringTwo) !== -1 || this.news["articles"][i]["description"].search(this.mustContainStringTwo) !== -1) && j < 5) {
          this.mainNews[j] = this.news["articles"][i];
          j++;
        }
        else if(this.news["articles"][i]["title"].length <= 100 && (this.news["articles"][i]["description"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainStringTwo) !== -1 || this.news["articles"][i]["description"].search(this.mustContainStringTwo) !== -1) && j == 5){
          console.log(this.news["articles"][i]);
          this.singlePiece = this.news["articles"][i];
          j=6;
        }
        else if(this.news["articles"][i]["title"].length <= 100 && (this.news["articles"][i]["description"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainStringTwo) !== -1 || this.news["articles"][i]["description"].search(this.mustContainStringTwo) !== -1) && j < 10){
          this.secondaryNews[j-6] = this.news["articles"][i];
          j++;
        }
      }
    });
  }
}
