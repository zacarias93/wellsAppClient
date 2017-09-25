export class Job {
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  id: number
  name: string

  toString() {
    return '\nID: ' + this.id + '\nName: ' + this.name
  }
}
