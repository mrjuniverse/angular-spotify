import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

//export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
//  return next(req);
//};

@Injectable()
export class injectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try{

      const token = this.cookieService.get('token')
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )
      return next.handle(newRequest);

    } catch (e) {
      console.log('🔴🔴🔴 Ojo Error', e)
      return next.handle(request);
    }
  }
}