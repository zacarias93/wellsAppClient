import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { User } from '../model/user';
import { TimeSheet } from '../model/timesheet';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeSheetService {
    constructor(private http: Http) { }

    private url = 'localhost:8080/timecard'


    getTimesheets() {
        console.log('Service: getTimesheets()')
        console.log('URL: ' + this.url)

        return this.http
            .get(this.url)
            .map((res: Response) => res.json() ) 
            .catch(this.handleError);

    }


    submitTimeSheet(timesheet: TimeSheet) {
        console.log('Service: submitTimeSheet()')
        console.log('URL: ' + this.url);
        console.log(timesheet);

        
        // return this.http.post(url,timesheet)
        //     .toPromise()
        //     .then((res: Response) => res.json())
        //     .catch(this.handleError);

    }





    handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }


}