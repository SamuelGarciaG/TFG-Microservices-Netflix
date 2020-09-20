import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

export class User {
    constructor(
        public status: string,
    ) { }
}

export class JwtResponse {
    constructor(
        public jwttoken: string,
    ) { }

}

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    private loginStatus = new BehaviorSubject<boolean>(this.checkLogInStatus());
    private username = new BehaviorSubject<string>('');

    constructor(
        private httpClient: HttpClient
    ) { }


    authenticate(username, password) {
        this.username.next(username);
        return this.httpClient.post<any>('http://localhost:7000/auth', { username, password }, ).pipe(
            map(
                userData => {
                    this.loginStatus.next(true);
                    sessionStorage.setItem('username', username);
                    let tokenStr = 'Bearer ' + userData.token;
                    sessionStorage.setItem('token', tokenStr);
                    return userData;
                }
            )
        );
    }

    checkLogInStatus(): boolean{
        return false;
    }

    get usernameLogIn(){
        return this.username.asObservable();
    }
    get isUserLoggedIn() {
        return this.loginStatus.asObservable();
    }

    logOut() {
        sessionStorage.removeItem('username')
    }

}