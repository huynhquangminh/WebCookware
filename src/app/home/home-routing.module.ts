import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { TintucDetailComponent } from './tintuc-detail/tintuc-detail.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
const homeRoutes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'product/:page', component: ProductComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: LienheComponent },
    { path: 'news', component: TintucComponent },
    { path: 'category/product/:key', component: CategoryComponent },
    { path: 'news-detail/:id', component: TintucDetailComponent },
    { path: 'introduce', component: GioithieuComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
