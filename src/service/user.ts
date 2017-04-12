import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../../model/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    private usersURL = 'https://wellsapp-9ef37.firebaseio.com/'
    private auth = '.json?auth=MTnhWFwoABcCIpqaVPZA0YjEN7aFMo40c0GGAQwb'

    getUser(name:string) {
        var url = this.usersURL + name + this.auth;
        console.log(url);
        return this.http.get(url)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }



}

