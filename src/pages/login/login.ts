import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../service/user';
import { User } from '../../model/user';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {
  registerCredentials = {email: '', password: ''};
 
  constructor(private nav: NavController, private userService: UserService) {}

  ngOnInIt() {
    this.user = this.userService.getUser('zac');
    console.log(this.user);
  }

  user:any
  firstName:string
  email:string
  password:string

  submitFirstName(name) {
    this.firstName = name;
  }
  submitEmail(email) {
    this.email = email;
  }
  submitPassword(pass) {
   this.password = pass;
  }

  login(){
    var data = this.userService.getUser('zac');
    console.log(data);
  }
 
 

 
}

