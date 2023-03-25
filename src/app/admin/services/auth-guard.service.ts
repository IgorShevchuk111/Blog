import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      const isAuth = this.authService.isAuthenticated();
     if (isAuth) {
      return true
     } else {
      this.router.navigate(['/admin','login'])
      return false
     }
  }
}
