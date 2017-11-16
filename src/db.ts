import { TimeSheet } from './model/timesheet';
import { User } from './model/user'
import { Job } from './model/job';
import { Constants } from './constants';


export class DB {

    constructor() { };

    private static timeSheets: TimeSheet[] = []

    private static activeUser: User;

    static initDB() {
        var user = new User(1, 'z', 'pass', 'zac', 'lee', 99);
        var job = new Job(1, 'JPMC');
        var ts1 = new TimeSheet(user, job, '8');
    
        var user1 = new User(2, 'c', 'pass', 'chris', 'wells', 99);
        var job2 = new Job(2, 'Solidified');
        var ts2 = new TimeSheet(user1, job2, '20');
    
        DB.addTimeSheet(ts1);
        DB.addTimeSheet(ts2);
    
        DB.setActiveUser(user);    
      }



    public static addTimeSheet(timesheet: TimeSheet) {
        DB.timeSheets.push(timesheet);
        console.log('DB: timesheet added')
        console.log('TimeSheets: \n')
    }

    public static displayTimeSheets(empl: User) {

        console.log('Employee ID: ' + empl.ID);

        for (var i = 0; i < DB.timeSheets.length; i++) {
            //Print all for boss
            if (empl.ID == Constants.adminID) {
                console.log(DB.timeSheets[i]);
            }
            //Print employees TimeSheets
            else if (DB.timeSheets[i].employeeID == empl.ID) {
                console.log(DB.timeSheets[i]);
            }
        }
    }

    public static setActiveUser(user: User) {
        DB.activeUser = user;
    }

    public static getActiveUser(): User {
        return DB.activeUser;
    }

}
