import { Injectable } from '@angular/core';

@Injectable()
export class TinTucService {
    constructor() { }

    dataservice: any;

    SetDataSerice(data: any) {
        this.dataservice = data;
    }

    GetDataService() {
        return this.dataservice;
    }
}
