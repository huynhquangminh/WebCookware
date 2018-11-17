import { LoginDataService } from './../../service/login-service';
import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  infoUserLogin: any = {
    email: '',
    id : '',
    imguser: '',
    name: '',
    provider: '',
    token: ''
  };
  constructor(
    private socialAuthService: AuthService,
    private _router: Router,
    private _loginservice: LoginDataService
  ) { }

  ngOnInit() {
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
     } else if (socialPlatform === 'linkedin') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    //  else if (socialPlatform === 'google') {
    //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.infoUserLogin = userData;
        this._loginservice.SetDataSerice(this.infoUserLogin);
        this._router.navigate(['/home/index']);
      }
    );
  }
}
