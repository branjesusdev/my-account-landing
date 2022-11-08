import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

// COMPONENTS

import { UsersAddEditComponent } from '@users/components/users-add-edit/users-add-edit.component';
import { STYLE_POPUP_DEFAULT } from 'src/app/themes/popups/popup-default';
import { OutUsersAll } from '@users/models/out/out-users-all';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss']
})
export class UsersHeaderComponent implements OnInit {

  @Input() permitCreated : boolean = false;
  @Output() recordsAdd : EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _DIALOG: DialogService,
  ) { }

  ngOnInit(): void {
  }

  addUser() : void {

    const ref = this._DIALOG.open(UsersAddEditComponent, { header: `Crear usuario`, ...STYLE_POPUP_DEFAULT});

    ref.onClose.subscribe( close => {
      console.log((close.userAdd && close.userResponse), close.userAdd , close.userResponse);
      if(close)
        if(close.userAdd && close.userResponse)
          this.recordsAdd.emit(true)

    })

  }

}
