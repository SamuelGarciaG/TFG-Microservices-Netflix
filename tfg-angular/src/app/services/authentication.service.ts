import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    constructor(
        private httpClient: HttpClient
    ) { }

    authenticate(username, password) {
        return this.httpClient.post<any>('http://localhost:7000/auth', { username, password }, ).pipe(
            map(
                userData => {
                    sessionStorage.setItem('username', username);
                    let tokenStr = 'Bearer ' + userData.token;
                    sessionStorage.setItem('token', tokenStr);
                    return userData;
                }
            )
        );
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        //console.log(!(user === null))
        return !(user === null)
    }

    logOut() {
        sessionStorage.removeItem('username')
    }

}