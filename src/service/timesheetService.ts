import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TimeSheet } from '../model/timesheet';
import { DB } from '../db';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeSheetService {
    constructor(private http: Http) { }

    private baseUrl = 'http://localhost:8080/timecard'


    private usersURL = 'https://wellsapp-9ef37.firebaseio.com/'
    private auth = '.json?auth=MTnhWFwoABcCIpqaVPZA0YjEN7aFMo40c0GGAQwb'

    getTimesheets(): Observable<TimeSheet[]> {
        return this.http
            .get(this.baseUrl)
            .map((res: Response) => res.json())
        // .catch(this.handleError);
    }

    submitTimeSheet(timesheet: TimeSheet) {
        console.log('Service: submitTimeSheet()')
        console.log('URL: ' + this.baseUrl);
        console.log(timesheet);


        return this.http
            .post(this.baseUrl, timesheet)
            .subscribe(res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            });
    }


    handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }


}