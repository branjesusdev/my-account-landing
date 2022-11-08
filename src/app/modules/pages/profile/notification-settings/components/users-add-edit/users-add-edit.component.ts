import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// ENTITYS

import { OutEntitys } from '@shared/models/default/entitys.class';
import { RolUsers } from '@shared/models/default/rol-users.class';
import { TypeDocuments } from '@shared/models/default/type-documents.class';
import { InSaveUser } from '@users/models/in/in-save-user.interface';
import { UsersAllTable } from '@users/models/defaults/users-all-table';
import { DefaultDropdown } from '@shared/models/default/default-dropdown.class';

// RESOURCES

import { SpinnerService } from '@shared/services/code/spinner.service';
import { ToastMessageService } from '@shared/services/code/toast-message.service';
import { AuthSessionStoreService } from '@shared/services/pages/auth/auth-session-store.service';
import { ListDefaultsService } from '@shared/services/pages/list-defaults/list-defaults.service';
import { MESSAGES_DEFAULT } from '@shared/config/messages';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsersActionsService } from '@users/services/users-actions.service';
import { ValidatorsUIService } from '@shared/services/code/validators-ui.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './users-add-edit.component.html',
  styleUrls: ['./users-add-edit.component.scss'],
})
export class UsersAddEditComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  form!: FormGroup;
  listEntitys: OutEntitys[] = [];
  listRols: RolUsers[] = [];
  listTypeDocuments: TypeDocuments[] = [];
  textButtonSubmit: string = 'Crear';
  statusUser : DefaultDropdown[] = [];
  validUser : DefaultDropdown[] = [];
  updateUser !: any;

  private unSusbscribe$ = new Subject<void>();

  constructor(
    private readonly _VALIDATORS: ValidatorsUIService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private _LIST: ListDefaultsService,
    private _TOAST: ToastMessageService,
    public _SPINNER: SpinnerService,
    private _SESSION: AuthSessionStoreService,
    private _REF: DynamicDialogRef,
    private _CONF: DynamicDialogConfig,
    private _USERS: UsersActionsService
  ) {
    this.updateUser = this._CONF.data;
    this.getEntitys();
    this.getRols();
    this.getStatusUser();
    this.getValidUser();
    this.getTypeDocuments();
    this.createForm();
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    Object.keys(this.form.controls).forEach((controlName) => {
      let control = this.form.controls[controlName];
      control.markAsPristine();
    });

    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.unSusbscribe$.next();
    this.unSusbscribe$.complete();
  }

  /* _   _   _   _   _   _   _   _   _   _   _
    / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \
   ( F | o | r | m | u | l | a | r | i | o | s )
    \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ */

  private createForm() {

    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
    this.form = this.fb.group({
      firstName: [, [Validators.required, Validators.minLength(3)]],
      lastName: [, [Validators.required, Validators.minLength(3)]],
      idRol: [, [Validators.required]],
      phone: [, [Validators.required]],
      email: [
        ,
        [
          Validators.required,
          Validators.pattern(emailRegex),
          Validators.minLength(3),
        ],
      ],
      documentId: [, [Validators.required]],
      document: [, [Validators.required, Validators.minLength(4)]],
      entidadFk: [, [Validators.required]],
      grade: [, [Validators.required, Validators.minLength(3)]],
      unit: [, [Validators.required, Validators.minLength(3)]],
      position: [, [Validators.required, Validators.minLength(3)]],
      directionGroup: [, [Validators.required, Validators.minLength(3)]],
      contactPerson: [, [Validators.required, Validators.minLength(3)]],
      responsible: [, [Validators.required, Validators.minLength(3)]],
      coResponsible: [, [Validators.required, Validators.minLength(3)]],
    });
  }

  campoNoValido(campo: string) {
    return (
      this.form?.get(campo)?.invalid &&
      (this.form?.get(campo)?.touched || this.form?.get(campo)?.dirty)
    );
  }

  get controls() {
    return this.form?.controls;
  }

  /*
   _   _   _   _   _   _   _
  / \ / \ / \ / \ / \ / \ / \
 ( M | e | t | o | d | o | s )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ */

  private getEntitys(): void {
    this._LIST
      .getListEntitys()
      .pipe(take(1))
      .subscribe({
        next: (list) => {
          if (list.code == 200) this.listEntitys = list.response;
          else this._TOAST.showError(list.message);

          if (this.updateUser)
            this.mappingIndormationForm(this.updateUser);
        },
        error: (_) => {
          this._TOAST.showError(MESSAGES_DEFAULT.ERROR_CONNECT);
        },
      });
  }

  private getRols(): void {
    this.listRols = this._LIST.getRolUser();
  }

  private getStatusUser(): void {
    this.statusUser = [
      new DefaultDropdown(1, 'Activo'),
      new DefaultDropdown(2, 'Inactivo')
    ]
  }

  private getValidUser(): void {
    this.validUser = [
      new DefaultDropdown('SI', 'SI'),
      new DefaultDropdown('NO', 'NO')
    ]
  }

  private getTypeDocuments(): void {
    this.listTypeDocuments = this._LIST.getTypeDocuments();
  }

  private mappingIndormationForm(user: UsersAllTable): void {

    console.log('🗒️🗒️🗒️', user);
    this.textButtonSubmit = 'Actualizar';
    this.form.addControl('activate', new FormControl('1', Validators.required));
    this.form.addControl('vigent', new FormControl('SI', Validators.required));

    const valuesForm: Array<string> = [
      'firstName',
      'lastName',
      'idRol',
      'phone',
      'email',
      'documentId',
      'document',
      'entidadFk',
      'grade',
      'unit',
      'position',
      'directionGroup',
      'contactPerson',
      'responsible',
      'coResponsible',
      'vigent',
      'activate'
    ];

    for (const key of valuesForm) {
      this.form.get(key)?.setValue(user[key as keyof UsersAllTable]);
    }

  }

  submitForm(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {

      if (this.updateUser)
        this.updateUserService()
      else
        this.saveUserService()

    } else this._TOAST.showWarn('Verifica el formulario');
  }

  private saveUserService() : void {
    this._SPINNER.spinnerStatus = true;
    const { phone } = this.form.value;
    const requestUser: InSaveUser = {
      ...this.form.value,
      phone: String(this._VALIDATORS.fn__replaceGetNumbers(phone)) };

    this._USERS
      .saveUser(requestUser)
      .pipe(takeUntil(this.unSusbscribe$))
      .subscribe({
        next: (respUser) => {
          this._SPINNER.spinnerStatus = false;
          if (respUser.code == 200) {
            this._TOAST.showSuccess('Usuario creado correctamente.');
            this._REF.close({
              userAdd: true,
              userResponse: respUser.response,
            });
          }else
            this._TOAST.showError(respUser.message);
        },
        error: (err) => {
          this._TOAST.showError(MESSAGES_DEFAULT.ERROR_DEFAULT);
          this._SPINNER.spinnerStatus = false;
        },
      });
  }


  private updateUserService() : void {
    this._SPINNER.spinnerStatus = true;
    const { phone } = this.form.value;
    const requestUser: InSaveUser = {
      ...this.form.value,
      phone: String(this._VALIDATORS.fn__replaceGetNumbers(phone)) };

    this._USERS
      .updateUser(requestUser, this.updateUser.id)
      .pipe(takeUntil(this.unSusbscribe$))
      .subscribe({
        next: (respUser) => {
          this._SPINNER.spinnerStatus = false;
          if (respUser.code == 200) {
            this._TOAST.showSuccess('Usuario actualizado correctamente.');
            this._REF.close({
              userAdd: true,
              userResponse: respUser.response,
            });
          }else
            this._TOAST.showError(respUser.message);

        },
        error: (err) => {
          this._TOAST.showError(MESSAGES_DEFAULT.ERROR_DEFAULT);
          this._SPINNER.spinnerStatus = false;
        },
      });
  }

  exitPopup(): void {
    this._REF.close({ exit: true });
  }
}
