import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

import { DialogService } from 'primeng/dynamicdialog';

// ENTITYS

import { MappingTable } from '@shared/models/default/mapping-table';
import { OutUsersAll } from '@users/models/out/out-users-all';
import { UsersAllTable } from '@users/models/defaults/users-all-table';

// RESOURCES

import { UsersActionsService } from '@users/services/users-actions.service';
import { takeUntil, take } from 'rxjs/operators';
import { ToastMessageService } from '@shared/services/code/toast-message.service';
import { MESSAGES_DEFAULT } from '@shared/config/messages';
import { STYLE_POPUP_DEFAULT } from 'src/app/themes/popups/popup-default';
import { IDENTITY_ROL_ID } from '@shared/config/roles';
import { SpinnerService } from '@shared/services/code/spinner.service';

// COMPONENTS

import { UsersAddEditComponent } from '@users/components/users-add-edit/users-add-edit.component';

@Component({
  selector: 'app-users-records',
  templateUrl: './users-records.component.html',
  styleUrls: ['./users-records.component.scss'],
})
export class UsersRecordsComponent implements OnInit, OnDestroy, OnChanges {
  private unSusbscribe$ = new Subject<void>();
  recordsUsers: UsersAllTable[] = [];
  mappingTable: MappingTable[] = [];
  @Input() permitEdit: boolean = false;
  @Input() recordsRefresh: boolean = false;

  constructor(
    private readonly _USERS: UsersActionsService,
    private readonly _TOAST: ToastMessageService,
    public readonly _SPINNER: SpinnerService,
    private _DIALOG: DialogService
  ) {
    this.getAllUsers();
    this.mappingTableRows();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const changesRecords = changes['recordsRefresh'].currentValue;
    if (changesRecords == true) this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.unSusbscribe$.next();
    this.unSusbscribe$.complete();
  }

  private getAllUsers(): void {

    this._SPINNER.spinnerStatus = true;
    this._USERS
      .getAllUsers()
      .pipe(takeUntil(this.unSusbscribe$))
      .subscribe({
        next: (users) => {
          if (users.code == 200) this.refreshTable(users.response);
          else this._TOAST.showError(users.message);
          this._SPINNER.spinnerStatus = false;
        },
        error: (_) => {
          this._TOAST.showError(MESSAGES_DEFAULT.ERROR_CONNECT);
            (this._SPINNER.spinnerStatus = false);
        },
      });
  }

  private refreshTable(users: OutUsersAll[]): void {
    if (users.length == 0) return;

    this._SPINNER.spinnerStatus = true;
    const usersTbl =
      users.map((user) => {
        const userTbl = new UsersAllTable();
        userTbl.id = user.id;
        userTbl.activate = user.activate;
        userTbl.tblActivateName = user.activate == 0 ? 'Inactivo' : 'Activo';
        userTbl.idRol = user.idRol;
        userTbl.tblRolName = IDENTITY_ROL_ID(user.idRol).NAME;
        userTbl.firstName = user.firstName;
        userTbl.lastName = user.lastName;
        userTbl.tblFirstLastName = `${user.firstName + ' ' + user.lastName}`;
        userTbl.creationDate = user.creationDate;
        userTbl.phone = user.phone;
        userTbl.email = user.email;
        userTbl.documentId = user.documentId;
        userTbl.document = user.document;
        userTbl.entidadFk = user.entidadFk;
        userTbl.nameEntity = user.nameEntity;
        userTbl.grade = user.grade;
        userTbl.unit = user.unit;
        userTbl.position = user.position;
        userTbl.directionGroup = user.directionGroup;
        userTbl.contactPerson = user.contactPerson;
        userTbl.responsible = user.responsible;
        userTbl.coResponsible = user.responsible;
        userTbl.vigent = user.vigent;

        return userTbl;
      }) ?? [];

    this.recordsUsers = usersTbl;
    this._SPINNER.spinnerStatus = false;
  }

  private mappingTableRows(): void {
    var newMappingTable: MappingTable[];
    newMappingTable = [
      {
        idFilter: 'tblActivateName',
        nameFilter: 'Activo',
      },
      {
        idFilter: 'vigent',
        nameFilter: 'Vigente',
      },
      {
        idFilter: 'tblFirstLastName',
        nameFilter: 'Nombres y Apellidos',
      },
      {
        idFilter: 'document',
        nameFilter: 'Documento',
      },
      {
        idFilter: 'phone',
        nameFilter: 'Celuar',
      },
      {
        idFilter: 'email',
        nameFilter: 'Correo',
      },
      {
        idFilter: 'nameEntity',
        nameFilter: 'Entidad',
      },
      {
        idFilter: 'grade',
        nameFilter: 'Grado',
      },
      {
        idFilter: 'unit',
        nameFilter: 'Unidad',
      },
      {
        idFilter: 'position',
        nameFilter: 'Puesto',
      },
      {
        idFilter: 'directionGroup',
        nameFilter: 'Grupo de dirección',
      },
      {
        idFilter: 'contactPerson',
        nameFilter: 'Contacto Personal',
      },
      {
        idFilter: 'responsible',
        nameFilter: 'Responsable',
      },
      {
        idFilter: 'coResponsible',
        nameFilter: 'Co. Responsable',
      },
      {
        idFilter: 'creationDate',
        nameFilter: 'Fecha',
      },
      {
        idFilter: '',
        nameFilter: '',
      },
    ];

    this.mappingTable = newMappingTable;
  }

  selectRowEdit(user: UsersAllTable): void {
    const ref = this._DIALOG.open(UsersAddEditComponent, {
      header: `Editar usuario`,
      ...STYLE_POPUP_DEFAULT,
      data: user,
    });

    ref.onClose
    .pipe(take(1))
    .subscribe((close) => {
      if(close) {
        if (close.userAdd && close.userResponse)
          this.getAllUsers();
      }
    });
  }
}
