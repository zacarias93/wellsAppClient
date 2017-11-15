import { TimeSheet } from '../src/model/timesheet';


export class DB {

    constructor(){};

    private timeSheets: TimeSheet[] = []

    public addTimeSheet(timesheet: TimeSheet) {
        this.timeSheets.push(timesheet);
        console.log('DB: timesheet added')
        console.log('TimeSheets: \n')
    }

    public displayTimeSheets() {
        for(var i =0; i<this.timeSheets.length; i++) {
            console.log(this.timeSheets[i]);
        }
    }
    
}