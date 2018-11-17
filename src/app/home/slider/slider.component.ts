import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { GETHEADER_URL } from './config';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  listSlider: any = [];
  listBanner: any = [
    {
      ID: null,
      ImagerHeader: 'feature4.png',
      IDProdcut: null
    },
    {
      ID: null,
      ImagerHeader: 'feature4.png',
      IDProdcut: null
    }
  ];
  constructor(
    private _apiservice: AppService
  ) { }
  imageUrls: any = [
    'assets/assets/slider3.jpg'
  ];
  ngOnInit() {
    this._apiservice.CallAllService(GETHEADER_URL).subscribe(data => {
      if (data) {
        this.listSlider = data.GetListSlider;
        this.listBanner = data.GetListBanner;
        if (this.listSlider !== null && this.listSlider !== undefined) {
          for (let i = 0; i < this.listSlider.length; i++) {
            this.imageUrls[i] = 'assets/assets/' + this.listSlider[i].ImagerHeader;
          }
        }
      }
    });
  }

}
