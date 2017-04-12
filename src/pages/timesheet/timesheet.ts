import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { TimeSheet } from '../../model/timesheet';
import { Job } from '../../model/job';
import { User } from '../../model/user';



@Component({
  selector: 'page-timesheet',
  templateUrl: 'timesheet.html',
  template: `
      
    <div align="center"> 
      <h2>Employee: {{activeUser.firstName}} {{activeUser.lastName}} </h2>
    </div>

    <div align="center">
      <h3>Select Job:</h3>
      <select [(ngModel)]="selectedJob" (ngModelChange)="selectJob(selectedJob)">
        <option *ngFor="let job of listOfJobs" [ngValue] = "job">
        {{job.name}}
        </option>
      </select>
    </div>

    <div align="center">
      <h3>Time In: </h3>
      <select [(ngModel)]="hourIn" (ngModelChange)="enterHourIn(hourIn)">
        <option *ngFor="let hour of hours" 
        [ngValue] = "hour">
        {{hour}}
        </option>
      </select>
      <select [(ngModel)]="minuteIn" (ngModelChange)="enterMinuteIn(minuteIn)">
        <option *ngFor="let minute of minutes" 
        [ngValue] = "minute">
        {{minute}}
        </option>
      </select>
      <select [(ngModel)]="meridianIn" (ngModelChange)="enterMeridianIn(meridianIn)">
        <option *ngFor="let meridian of meridians" 
        [ngValue] = "meridian">
        {{meridian}}
        </option>
      </select>
    </div>

    <div>
      <h3>Time Out: </h3>
      <select [(ngModel)]="hourOut" (ngModelChange)="enterHourOut(hourOut)">
        <option *ngFor="let hour of hours" 
          [ngValue] = "hour">
          {{hour}}
        </option>
      </select>
      <select [(ngModel)]="minuteOut" (ngModelChange)="enterMinuteOut(minuteOut)">
        <option *ngFor="let minute of minutes" 
          [ngValue] = "minute">
          {{minute}}
        </option>
      </select>
      <select [(ngModel)]="meridianOut" (ngModelChange)="enterMeridianOut(meridianOut)">
        <option *ngFor="let meridian of meridians" 
          [ngValue] = "meridian">
          {{meridian}}
        </option>
      </select>

      <br><br>
      <form (ngSubmit)="calcHoursWorked()">
        <button ion-button type="submit"> Calculate</button>
      </form>
      <div *ngIf="errorMessage"> 
        <h2> {{errorMessage}} </h2>
      </div>
      <h2>Time Worked: </h2> <input [(ngModel)]="totalTimeWorked"> 
    </div>


  `

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

  loadJobs() {
    var exampleJob = new Job(0, '--select job--')
    var job1 = new Job(1, 'Ashland Engineering')
    var job2 = new Job(2, 'Yoga Jellies')
    var job3 = new Job(3, 'Rando Consulting Work')
    var job4 = new Job(99, 'Other')
    var listOfJobs = [exampleJob, job1, job2, job3, job4]

    this.selectedJob = exampleJob;
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
    console.log(timeMap);
    var mapOut = timeMap.timeOut;
    var mapIn = timeMap.timeIn;

    var totalMinutesOut = (mapOut.hour) * 60 + mapOut.minute
    var totalMinutesIn = (mapIn.hour) * 60 + mapIn.minute

    console.log('min out: ' + totalMinutesOut);
    console.log('min in: ' + totalMinutesIn);

    var totalMinutesWorked = totalMinutesOut - totalMinutesIn;

    console.log('total mins: ' + totalMinutesWorked);

    var totalHoursWorked = Math.floor(totalMinutesWorked / 60)
    var fractionOfHourWorked = (totalMinutesWorked % 60) / 60; //fraction of hour worked

    console.log('total hours: ' + totalHoursWorked);
    console.log('fraction of hour worked: ' + fractionOfHourWorked)

    var totalTimeWorked = totalHoursWorked + fractionOfHourWorked;
    console.log('Total time worked: ' + totalTimeWorked)


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



