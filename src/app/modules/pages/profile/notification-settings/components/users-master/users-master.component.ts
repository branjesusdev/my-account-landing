import { Component } from '@angular/core';
import { ValidatePermissionsService } from '@shared/services/code/validate-permissions.service';
import { OutUsersAll } from '@users/models/out/out-users-all';

@Component({
  selector: 'app-users-master',
  templateUrl: './users-master.component.html',
  styleUrls: ['./users-master.component.scss']
})
export class UsersMasterComponent  {

  permitEdit : boolean = false;
  permitCreated : boolean = false;
  usersRefresh : boolean = false;

  constructor(
    private readonly _PERMIT : ValidatePermissionsService
  ) {
    this.getPermitUser();
  }

  getPermitUser() {
    this.permitEdit = this._PERMIT.getPermitEdit();
    this.permitCreated = this._PERMIT.getPermitCreated();
  }

}
