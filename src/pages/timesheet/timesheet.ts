import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { TimeSheet } from '../../model/timesheet';
import { Job } from '../../model/job';
import { User } from '../../model/user';
import { UserService } from '../../service/user';



@Component({
  selector: 'page-timesheet',
  templateUrl: 'timesheet.html',
  providers: [UserService],
  

})

export class TimeSheetPage {
  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
    console.log(this.activeUser);
    this.loadJobs();

  }

  activeUser = new User(22, 'keeper', 'Zacarias', 'Lee')
  selectedJob: any = null;
  listOfJobs: any = null;

  loadJobs() { //make this a service
    var job1 = new Job(1, 'Ashland Engineering')
    var job2 = new Job(2, 'Yoga Jellies')
    var job3 = new Job(3, 'Rando Consulting Work')
    var job4 = new Job(99, 'Other')
    var listOfJobs = [job1, job2, job3, job4]
    this.listOfJobs = listOfJobs;
  }
  
    selectJob(job) {
    this.selectedJob = job;
    console.log(this.selectedJob);
  }

  hours = TimeSheet.hours;
  minutes = TimeSheet.minutes;
  meridians = TimeSheet.meridians

  hourIn:string;
  minuteIn:string;
  meridianIn:string;

  hourOut:string;
  minuteOut:string;
  meridianOut:string;

  totalTimeWorked:string;
  errorMessage:string;

  enterHourIn(hour) {
    this.hourIn = hour;
  }
  enterMinuteIn(min) {
    this.minuteIn = min;
  }
  enterHourOut(hour) {
    this.hourOut = hour;
  }
  enterMinuteOut(min) {
    this.minuteOut = min;
  }
  enterMeridianIn(meridian) {
    this.meridianIn = meridian;
  }
  enterMeridianOut(meridian) {
    this.meridianOut = meridian;
  }

  convertToMilitary() {

    if(this.meridianIn == 'PM') {
      var hourIn = parseInt(this.hourIn) + 12;
    }
    else var hourIn = parseInt(this.hourIn)

    if(this.meridianOut == 'PM') {
      var hourOut = parseInt(this.hourOut) + 12;
    }
    else var hourOut = parseInt(this.hourOut)

    var militaryIn = {
      hour: hourIn,
      minute: parseInt(this.minuteIn)
    }

    var militaryOut = {
      hour: hourOut,
      minute: parseInt(this.minuteOut)
    }

    var timeMap = {
      timeIn : militaryIn,
      timeOut : militaryOut
    }

    return  timeMap       
    }

  calcHoursWorked() {
    this.errorMessage = null;
    var timeMap = this.convertToMilitary()
    var mapOut = timeMap.timeOut;
    var mapIn = timeMap.timeIn;

    var totalMinutesOut = (mapOut.hour) * 60 + mapOut.minute
    var totalMinutesIn = (mapIn.hour) * 60 + mapIn.minute
    var totalMinutesWorked = totalMinutesOut - totalMinutesIn;

    var totalHoursWorked = Math.floor(totalMinutesWorked / 60)
    var fractionOfHourWorked = (totalMinutesWorked % 60) / 60; //fraction of hour worked
    var totalTimeWorked = totalHoursWorked + fractionOfHourWorked;

    if(totalTimeWorked == null) {
      this.totalTimeWorked = null;
      this.errorMessage = 'Total time worked is NULL';
    }
    else if(totalTimeWorked < 0) {
      this.totalTimeWorked = null;
      this.errorMessage = 'You must clock in BEFORE you clock out.';
    }
    else {
      this.totalTimeWorked = totalTimeWorked + ' hours';
    }
  }

}



