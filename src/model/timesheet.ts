import { Job } from './job'
import { User } from './user'

export class TimeSheet {
  constructor(user: User, job: Job, hoursWorked: string) {
    this.employeeID = user.ID
    this.employeeFirstName = user.firstName
    this.employeeLastName = user.lastName
    this.payRate = user.payRate
    this.jobName = job.name
    this.jobId = job.id
    this.hoursWorked = hoursWorked
  }

  employeeID: number
  employeeFirstName: string
  employeeLastName: string
  payRate: number

  jobName: string
  jobId: number

  hoursWorked: string

toString() {
  return 'Employee: ' + this.employeeFirstName + ' ' + this.employeeLastName + ' ' + this.employeeID + ' ' + this.payRate + 
        '\nJob:' + this.jobName + ' ' + this.jobId + 
        '\nHoursWorked: ' + this.hoursWorked
}
}









