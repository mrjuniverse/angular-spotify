import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

//export const sessionGuard: CanActivateFn = (route, state) => {
//  return true;
//};

@Injectable({
  providedIn: 'root'
})
export class sessionGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean {
    try {

      const token: boolean = this.cookieService.check('token')
      if( !token ){
        this.router.navigate(['/', 'auth'])
      }
      return token

    }catch(e){
      console.log('Algo sucedio ?? ❌❌', e);
      return false
    }
  
  }

}
