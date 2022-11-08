import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, tap } from 'rxjs/operators';

import { OutResponse } from '@shared/models/out/out-response.interface';
import { AuthenticationUser } from '@shared/models/default/authentication';

import { PATHS } from '@shared/config/paths';

import { InAuthentication } from '@auth/models/in/in-authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private _HTTP: HttpClient) {}

  postAuthentication( request : InAuthentication ): Observable<OutResponse<AuthenticationUser>> {
    const url: string = `${ PATHS.POST_AUTHENTICATION}`;
    const headers = new HttpHeaders().append('skipt', 'true');
    return this._HTTP.post<OutResponse<AuthenticationUser>>(url, request, {headers}).pipe(
      retry(2)
    );
  }
}
