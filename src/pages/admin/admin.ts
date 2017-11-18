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

  constructor(public navCtrl: NavController, private timeSheetService: TimeSheetService) {
    this.activeUser = DB.getActiveUser()
  }

  activeUser: User;
  timeSheets: TimeSheet[];
  selectedTimeSheet;

  ngOnInit() {
    this.initDB();
  }

  getTimeSheets() {
    this.refreshPage()
    this.timeSheetService
      .getTimesheets()
      .subscribe((data) => this.inputTimeSheets(data))

  }

  inputTimeSheets( timeSheetArray: TimeSheet[] ) {
    this.timeSheets = timeSheetArray
    console.log(this.timeSheets);
  }

  showTimeSheet(timeSheet: TimeSheet) {
    console.log(timeSheet);
  }

  initDB() {
    var user = new User(1, 'z', 'pass', 'Zac', 'Lee', 99);
    var job = new Job(1, 'JPMC');
    var ts1 = new TimeSheet(user, job, '8');

    this.refreshPage();

    this.selectedTimeSheet = ts1;
  }

  refreshPage() {
    this.activeUser = DB.getActiveUser();
  }





}
