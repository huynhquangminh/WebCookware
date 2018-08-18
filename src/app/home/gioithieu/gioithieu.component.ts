import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { ActivatedRoute, Router } from '@angular/router';
import { GETINTRODUCTION_URL } from './config';

@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.css']
})
export class GioithieuComponent implements OnInit {

  introductonResult: any;
  constructor(private _service: AppService, private route: ActivatedRoute, private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   }

  ngOnInit() {
    this._service.CallAllService(GETINTRODUCTION_URL).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request Is Unsuccessful');
          } else {
            this.introductonResult = data.Introduction;
          }
        }
      });
  }

}
