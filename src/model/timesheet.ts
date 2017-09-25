import { Job } from './job'

export class TimeSheet {
  constructor( job:Job, hoursWorked: string ) {
    this.job = job
    this.hoursWorked = hoursWorked
  }

  job: Job
  employeeID: number      // THIS WILL BE TAKEN FROM USER PROFILE LATER
  timeIn:number
  timeOut:number
  hoursWorked:string

  toString() {
    return 'Timehsheet: \n' + this.job.toString() + '\n' + '\nhoursWorked: ' + this.hoursWorked;
  }
  
}








