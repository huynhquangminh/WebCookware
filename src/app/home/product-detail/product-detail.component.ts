import { AppService } from './../../service/app-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GETPRODUCTBYID_URL } from './config';
import { ProductDetailDto } from '../model/productdetailDto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  Amount = 1;
  productdetaildto: ProductDetailDto = {
    id: 0
  };
  productDetail: any;
  constructor(private route: ActivatedRoute, private _service: AppService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   }

  ngOnInit() {
    this.productdetaildto.id = Number( this.route.snapshot.paramMap.get('id'));
    this._service.CallByResquestService(GETPRODUCTBYID_URL, this.productdetaildto).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request is sunsuccessful');
          } else {
            this.productDetail = data.ProductDetail;
          }
        }
      });
  }
  quantityChangeClick(value: string) {
    if (value === 'down') {
      if (this.Amount > 0) {
        this.Amount--;
      }

    } else {
      this.Amount++;
    }
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
