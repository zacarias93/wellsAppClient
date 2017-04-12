import { Job } from './job'

export class TimeSheet {
  constructor( job:Job, timeIn:string, timeOut:string ) {
    this.job = job
    this.timeIn = parseInt(timeIn)
    this.timeOut = parseInt(timeOut)
    this.hoursWorked = this.padZeros((this.timeOut - this.timeIn),4)
  }

  job: Job
  employeeID: number      // THIS WILL BE TAKEN FROM USER PROFILE LATER
  timeIn:number
  timeOut:number
  hoursWorked:string

  static hours = ['01','02','03','04','05','06','07','08','09','10','11','12']
  static minutes = ['00','15','30','45']
  static meridians = ['AM', 'PM']
  
  padZeros(num, places) {
    var numZero = places - num.toString().length;
    var padNum = '' 

    for(var i=0; i<numZero; i++){
      padNum+= '0'
    }

    return padNum += num
  }

  
    
}








