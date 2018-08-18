import { TinTucService } from './../service/tintuc-service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AppService } from '../service/app-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule, TooltipModule  } from 'ngx-bootstrap';
import { TintucComponent } from './tintuc/tintuc.component';
import { CategoryComponent } from './category/category.component';
import { TintucDetailComponent } from './tintuc-detail/tintuc-detail.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    IndexComponent,
    ProductComponent,
    ProductDetailComponent,
    SliderComponent,
    LoginComponent,
    LienheComponent,
    LeftmenuComponent,
    TintucComponent,
    CategoryComponent,
    TintucDetailComponent,
    GioithieuComponent,
  ],
  providers: [AppService, TinTucService],
})
export class HomeModule { }
