import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: any;

  constructor() { }
  login(email: string, password: string): Observable<string> {
    if (email === 'a@a.com' && password === 'aaa') {
      return of(email, password).pipe(
        map(res => {
          this.setToken(res);
          return res;
        })
      )
    }
    else {
      return throwError('user or password incorrect');
    }
  }
  setToken(t: string) {
    window.localStorage.setItem(environment.tokenkey, t);
  }
  getToken(): string {
    return window.localStorage.getItem(environment.tokenkey);
  }
  isLogged(): boolean {
    return this.getToken() != null;
  }


}



