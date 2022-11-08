import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';

// RESOURCES

import { IDENTITY_ENVIRONMENT, PATHS } from '@shared/config/paths';
export const TIMEOUT = new HttpContextToken(() => 3000);

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const url: string = `${IDENTITY_ENVIRONMENT() + request.url}`;

    if (request.headers.has('skipt')) {
      let req = request.clone({ url, setHeaders: { 'Content-Type' : 'application/json' }});

      return next.handle(req).pipe(
        tap((log) => {
          console.log('🤐🤐🤐', log);
          console.log('😎😎😎', request);
        })
      );
    }

    const req = request.clone({
      url,
      setHeaders: {
        'Content-Type' : 'application/json'
      },
    });

    return next.handle(req).pipe(
      tap((log) => {
        console.log('🤐🤐🤐', log);
        console.log('😎😎😎', request);
      }),
      timeout( req.context.get(TIMEOUT) )
    );
  }
}
