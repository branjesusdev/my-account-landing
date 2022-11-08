import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, tap } from 'rxjs/operators';

// RESOURCES

import { OutResponse } from '@shared/models/out/out-response.interface';
import { PATHS } from '@shared/config/paths';

// ENTITYS

import { OutPost } from '@posts/models/out/out-post';
import { InPosts } from '@posts/models/in/in-post'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HTTP: HttpClient) {}

  getPosts( request : InPosts ): Observable<OutResponse<OutPost>> {
    const url: string = `${ PATHS.GET_POSTS }`;
    return this._HTTP.post<OutResponse<OutPost>>(url, request).pipe(
      retry(2)
    );
  }
}
