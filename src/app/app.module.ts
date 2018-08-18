import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './service/app-service';
import { HttpModule } from '@angular/http';
import { SendDataService } from './service/send-data-service';
import { RouterModule } from '../../node_modules/@angular/router';
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule, RouterModule, AlertModule.forRoot()
  ],
  providers: [AppService, SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
