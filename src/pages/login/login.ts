import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../service/user';
import { User } from '../../model/user';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private userService: UserService) { }

  firstName: string
  password: string

  message: string

  user: User = new User(0, '', '', '')

  activeLastName: any
  activeFirstName: string
  activeID: string
  activePassword: string

  login(name: string) { //pass in string here of name to get user
    this.userService.getUser(name)
      .subscribe((data) => this.authenticate(this.user = data))


  }


  authenticate(user: User) {
    if (this.user.password == this.password) {
      console.log(user)
      console.log(' The Users actual password: ' + this.user.password)
      console.log(' Password entered into form: ' + this.password)
      this.message = 'Login Successful'
    }
    else {
      console.log(' The Users actual password: ' + this.user.password)
      console.log(' Password entered into form: ' + this.password)
      this.message = 'Username or password is incorrect'
    }
  }




}

