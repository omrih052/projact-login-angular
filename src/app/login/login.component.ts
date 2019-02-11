import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authServiceervice: any;
  router: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login(emailHtmlElement, passwordHtmlElemnt) {
    this.authServiceervice.login(emailHtmlElement.value && passwordHtmlElemnt.value)
      .subscribe((successRes) => {
        console.log(successRes)
        this.router.navigate(["member"])
      },
        (errorRes) => {
          console.log(errorRes);
        })
  }
}
