export class User {
  constructor(ID: number, password: string, firstName: string, lastName: string) {
    this.ID = ID
    this.password = password
    this.firstName = firstName
    this.lastName = lastName

  }
  ID: number
  password: string
  firstName: string
  lastName: string

}