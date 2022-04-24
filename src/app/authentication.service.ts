import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
  authenticate(username: any, password: any) {
    return this.httpClient
      .post<any>('http://localhost:8080/auth', { username, password })
      .pipe(
        map((userData) => {
          sessionStorage.setItem('username', username);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        })
      );
    /*
if (username === "amine" && password === "1234") {
sessionStorage.setItem('username', username)
return true;
} else {
return false;
}*/
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
