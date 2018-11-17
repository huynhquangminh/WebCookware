import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchProductDto } from '../model/searchproductDto';
import { SEARCHPRODUCT_URL } from './config';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {
  sub: Subscription;
  searchproductdto: SearchProductDto = {
    key: ''
  };
  listProductSearch: any = [];
  constructor(private _service: AppService, private route: ActivatedRoute, private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      const result = +params['key'];
      this.searchproductdto.key = result.toString();
    });
  }

  ngOnInit() {
    this._service.CallByResquestService(SEARCHPRODUCT_URL, this.searchproductdto).subscribe(data => {
      if (data) {
        this.listProductSearch = data.ListProduct;
      }
    });
  }
}
