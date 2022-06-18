import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private AuthGuardService: AuthGuardService, private router:Router){}
  canActivate():  boolean {

    if(!this.AuthGuardService.getToken()){
      alert("you are not logged in. First Login with your credentials");
      this.router.navigate(['/login-form']);
    }

    return this.AuthGuardService.getToken();
  }
  
}
