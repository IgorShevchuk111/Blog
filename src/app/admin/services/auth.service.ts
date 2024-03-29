import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<string> = new Subject<string>()

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  // Get Token
  get token() {
    const expDate = new Date(localStorage.getItem('expireDate') ?? '')
    if (new Date() > expDate) {
      this.logout()
      return null
    } else {
      return localStorage.getItem('idToken')
    }
  }
  // Login User
  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post<User>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }
  // HandleError
  handleError(error: HttpErrorResponse) {
    const errorMessage = error.error.error.message
    switch (errorMessage) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Wrong email')
        break;

      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password')
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
        this.error$.next('TOO_MANY_ATTEMPTS_TRY_LATER')
        break;

      default:
        break;
    }

    return throwError(error)
  }
  // Get error$
  getErrorSubject() {
    return this.error$;
  }
  // Logout User
  logout() {
    this.router.navigate(['/'])
    this.setToken(null)
  }
  // isAuthenticated
  isAuthenticated(): boolean {
    return !!this.token
  }
  // SetToken
  private setToken(response: any | null) {

    if (response) {
      const expireDate = new Date(Date.now() + +response.expiresIn * 1000)
      localStorage.setItem('expireDate', expireDate.toString())
      localStorage.setItem('idToken', response.idToken)
    } else {
      localStorage.clear()
    }
  }
}
