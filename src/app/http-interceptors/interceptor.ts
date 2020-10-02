import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req.clone();
    console.log(req.url);

    if (localStorage.getItem('token') && localStorage.getItem('userId') && req.url.includes('localhost:4000')) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', localStorage.getItem('token'))
          .set('x-userid', localStorage.getItem('userId'))
      });
    }


    return next.handle(authReq).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data: { reason: undefined; status: number };
        data = {
          reason: error && error.error ? error.error : '',
          status: error.status
        };
        console.log(data.reason);
        return throwError(data);
      })

    );
  }
}
