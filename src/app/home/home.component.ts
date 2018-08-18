import { SendDataService } from './../service/send-data-service';
import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/service/app-service';
import { GETCATEGORY_URL } from './config';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCategory: any;
  constructor(private _service: AppService, private _sendataservice: SendDataService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   }
  ngOnInit() {
    this._service.CallAllService(GETCATEGORY_URL).subscribe(
      data => {
        if (data) {
          this.listCategory = data.ListGetCategory;
          this._sendataservice.SetDataSerice(this.listCategory);
        }
      });
  }

}
