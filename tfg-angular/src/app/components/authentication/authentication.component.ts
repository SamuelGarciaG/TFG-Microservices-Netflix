import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-200px)' }),
        animate(
            '1s ease-in',
            style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class AuthenticationComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/home'])
        this.invalidLogin = false
        console.log(sessionStorage.getItem('token'));
      },
      error => {
        this.invalidLogin = true
        console.log(error);
      }
    )
    );

  }

}