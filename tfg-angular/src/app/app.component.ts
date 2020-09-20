import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  title: string;
  isLoggedIn: Observable<boolean>;
  user: Observable<string>;

  ngOnInit() {
    this.user = this.authService.usernameLogIn;
    this.isLoggedIn = this.authService.isUserLoggedIn;
  }


}
