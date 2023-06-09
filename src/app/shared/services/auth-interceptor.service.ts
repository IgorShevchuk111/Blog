import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/admin/services/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token || ''
        }
      })
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.auth.logout()
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                authFailed: true
              }
            })
          } else if (error.error.error.message === 'EMAIL_NOT_FOUND') {
            this.auth.logout()
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                wrongEmail: true
              }
            })
          } else if (error.error.error.message === 'INVALID_PASSWORD') {
            this.auth.logout()
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                wrongPasswodr: true
              }
            })
          }
          return throwError(error)
        }))
  }
}
