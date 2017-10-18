export class User {
  constructor(ID: number, password: string, firstName: string, lastName: string, payRate: number) {
    this.ID = ID
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.payRate = payRate

  }

  ID: number
  password: string
  firstName: string
  lastName: string
  payRate: number

}