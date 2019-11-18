import { Component, OnInit } from '@angular/core';
import { NavService, Menu } from '../../../shared/service/nav.service';
import { ColorScssService } from '../../../shared/service/color-scss.service'
import { NewsService } from 'src/app/service/news.service';
import { Subject, Subscription } from "rxjs"
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header-center-logo',
  templateUrl: './header-center-logo.component.html',
  styleUrls: ['./header-center-logo.component.scss']
})
export class HeaderCenterLogoComponent implements OnInit {

  public allMenuItems: Menu[];
  public firstHalfMenu: Menu[];
  public secondHalfMenu: Menu[];
  public index: number;
  math = Math;
  news: object;
  mustContainString: string = "League of Legends";

  newsToShow: object[] = [];
  subscription: Subscription;

  constructor(public navServices: NavService, public colorPicker: ColorScssService, public _news: NewsService) {
    this.subscription = this._news.news.subscribe((newValue) => {
      this.news = newValue;
      //console.log(this.news["articles"].prefix(10))

      let j = 0;
      for (let i = 0; i < this.news["articles"].length; i++) {
        if (this.news["articles"][i]["title"].length <= 100 && (this.news["articles"][i]["description"].search(this.mustContainString) !== -1 || this.news["articles"][i]["title"].search(this.mustContainString) !== -1) && j < 5) {
          this.newsToShow[j] = this.news["articles"][i];
          this.newsToShow[j]["id"] = j+1;
          j++;
        }
      }
      console.log(this.newsToShow);
    });
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('color-10');
  }


  yogaCarouselOptions = {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false
  }
}