import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimeSheetService } from '../../service/timesheetService'
import { DB } from '../../db'
import { TimeSheet } from '../../model/timesheet';
import { User } from '../../model/user';
import { Job } from '../../model/job';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TimeSheetService, DB]
})
export class HomePage {

  constructor(public navCtrl: NavController, private timeSheetService: TimeSheetService, private db: DB) { }

  ngOnInit() {
    this.initDB();
  }

  getTimeSheets() {
    // this.timeSheetService.getTimesheets()
    // .subscribe((data) => console.log(data))

    this.db.displayTimeSheets()
  }

  initDB() {
    var user = new User(1, 'z', 'pass', 'zac', 'lee', 99);
    var job = new Job(1, 'JPMC');
    var ts1 = new TimeSheet(user, job, '8');

    var user1 = new User(2, 'c', 'pass', 'chris', 'wells', 99);
    var job2 = new Job(2, 'Solidified');
    var ts2 = new TimeSheet(user1, job2, '20');

    this.db.addTimeSheet(ts1);
    this.db.addTimeSheet(ts2);
  }





}
