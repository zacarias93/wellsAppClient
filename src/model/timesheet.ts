import { Job } from './job'
import { User } from './user'

export class TimeSheet {
  constructor( user: User, job:Job, hoursWorked: string ) {
    this.user = user;
    this.job = job
    this.hoursWorked = hoursWorked
  }

  job: Job
  user: User      // THIS WILL BE TAKEN FROM USER PROFILE LATER
  hoursWorked:string

  toString() {
    return this.job.toString() + '\nhoursWorked: ' + this.hoursWorked;
  }
  
}








