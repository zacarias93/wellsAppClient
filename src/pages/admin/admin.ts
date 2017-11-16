import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimeSheetService } from '../../service/timesheetService'
import { DB } from '../../db'
import { TimeSheet } from '../../model/timesheet';
import { User } from '../../model/user';
import { Job } from '../../model/job';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
  providers: [TimeSheetService, DB]
})
export class AdminPage {

  constructor(public navCtrl: NavController, private timeSheetService: TimeSheetService, private db: DB) { }

  activeUser = DB.getActiveUser()

  ngOnInit() {
    this.initDB();
  }

  getTimeSheets() {
    this.refreshPage()
    this.timeSheetService.getTimesheets()
    // .subscribe((data) => console.log(data))

    // console.log('Timesheets: \n');
    // DB.displayTimeSheets()

    // console.log('Active User: \n');
    // console.log(DB.getActiveUser());
  }

  initDB() {
    var user = new User(1, 'z', 'pass', 'zac', 'lee', 99);
    var job = new Job(1, 'JPMC');
    var ts1 = new TimeSheet(user, job, '8');

    var user1 = new User(2, 'c', 'pass', 'chris', 'wells', 99);
    var job2 = new Job(2, 'Solidified');
    var ts2 = new TimeSheet(user1, job2, '20');

    DB.addTimeSheet(ts1);
    DB.addTimeSheet(ts2);

    DB.setActiveUser(user);

    this.refreshPage();
  }

  refreshPage() {
    this.activeUser = DB.getActiveUser();
    console.log('activeUser: ');
    console.log(this.activeUser);
  }





}
