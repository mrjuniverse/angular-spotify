import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class injectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try{
      const token = this.cookieService.get('token')
      if (!token) {
        return next.handle(request);
      }
      const newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
      return next.handle(newRequest);
    } catch (e) {
      console.log('🔴🔴🔴 Ojo Error', e)
      return next.handle(request);
    }
  }
}