import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail'
import { Subscription } from 'rxjs';
import { NavService } from 'src/app/shared/service/nav.service';
import { ColorScssService } from 'src/app/shared/service/color-scss.service';
import { NewsService } from 'src/app/service/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  mainNews: object[] = [];
  singlePiece: object = {};
  secondaryNews: object[] = [];
  subscription: Subscription;
  news: object;
  newsConcat: object[] = [];
  mustContainString: string = "Legends";
  mustContainStringTwo: string = "Riot";
  id: number = null;

  constructor(public navServices: NavService, public colorPicker: ColorScssService, public _news: NewsService, public _path: ActivatedRoute) {
    this.id = this._path.snapshot.params.id;
    this.subscription = this._news.news.subscribe((newValue) => {
      this.news = newValue;
      let j = 0;
      for (let i = 0; i < this.news["articles"].length; i++) {
        if (this.news["articles"][i]["title"].length <= 100 && (this.news["articles"][i]["description"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainStringTwo) !== -1 || this.news["articles"][i]["description"].search(this.mustContainStringTwo) !== -1) && j < 10) {
          this.mainNews[j] = this.news["articles"][i];
          this.mainNews[j]["id"] = j+1;
          j++;
        }
      }
    });
    console.log(this.mainNews);
  }
}
