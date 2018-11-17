import { Injectable } from '@angular/core';

@Injectable()
export class LoginDataService {
    constructor() { }

    infoUserLogin: any = {
        email: '',
        id : '',
        imguser: '',
        name: '',
        provider: '',
        token: ''
      };

    SetDataSerice(data: any) {
        this.infoUserLogin = data;
    }

    GetDataService() {
        return this.infoUserLogin;
    }
}
