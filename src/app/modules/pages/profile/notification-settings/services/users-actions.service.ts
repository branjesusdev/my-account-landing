import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';

// ENTITYS

import { OutResponse } from '@shared/models/out/out-response.interface';
import { OutUsersAll } from '@users/models/out/out-users-all';
import { PATHS } from '@shared/config/paths';
import { InSaveUser } from '@users/models/in/in-save-user.interface';

@Injectable()
export class UsersActionsService {

  constructor(
    private _HTTP: HttpClient
    ) {}

  getAllUsers() : Observable<OutResponse<OutUsersAll[]>> {
    const url: string = `${PATHS.GET_ALL_USERS}`;
    return this._HTTP.get<OutResponse<OutUsersAll[]>>(url).pipe(
      retry(2)
    );
  }

  saveUser( requestUser : InSaveUser ) : Observable<OutResponse<OutUsersAll[]>> {
    const url: string = `${PATHS.POST_SAVE_USER}`;
    return this._HTTP.post<OutResponse<OutUsersAll[]>>(url, requestUser).pipe(
      retry(2)
    );
  }

  updateUser( requestUser : InSaveUser, idUser : string ) : Observable<OutResponse<OutUsersAll[]>> {
    const url: string = `${PATHS.UPDATE_USER.replace('${id}', String(idUser))}`;
    return this._HTTP.put<OutResponse<OutUsersAll[]>>(url, requestUser).pipe(
      retry(2)
    );
  }

}
