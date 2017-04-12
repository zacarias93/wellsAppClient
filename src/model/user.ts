export class User {
  constructor(userID: number, password: string, firstName: string, lastName: string) {
    this.userID = userID
    this.password = password
    this.firstName = firstName
    this.lastName = lastName

  }
  userID: number
  password: string
  firstName: string
  lastName: string

}