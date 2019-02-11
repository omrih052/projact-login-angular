import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<string> {
    if (email === 'a@a.com' && password === 'aaa') {
      return of('ok');
    }
    else { return throwError('user or password incorrect') }
  }

  setToken(t: string) {
    window.localStorage.setItem(environment.tokenkey, t);
  }
  getToken(): string {
    return window.localStorage.getItem(environment.tokenkey);
  }
  islogged() {
    return this.getToken()
  }
}
