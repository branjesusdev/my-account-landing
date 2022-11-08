import { Component, OnDestroy, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {  Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

// ENTITYS

import { OutEntitys } from '@shared/models/default/entitys.class';
import { InAuthentication } from '@auth/models/in/in-authentication';

// RESOURCES

import { ListDefaultsService } from '@shared/services/pages/list-defaults/list-defaults.service';
import { ToastMessageService } from '@shared/services/code/toast-message.service';
import { MESSAGES_DEFAULT } from '@shared/config/messages';
import { EncryptDecryptService } from '@shared/services/code/encrypt-decrypt.service';
import { AuthLoginService } from '@pages/authentication/services/auth-login.service';
import { SpinnerService } from '@shared/services/code/spinner.service';
import { AuthSessionStoreService } from '@shared/services/pages/auth/auth-session-store.service';
import { GLOBALS_DEFAULT } from '@shared/config/globals';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class PostsRecordsComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  listEntitys: OutEntitys[] = [];
  visibleSubmit: boolean = true;

  private unSusbscribe$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private _LIST: ListDefaultsService,
    private _TOAST: ToastMessageService,
    private _AES: EncryptDecryptService,
    private _AUTH: AuthLoginService,
    private _ROUTER: Router,
    public _SPINNER: SpinnerService,
    private _SESSION: AuthSessionStoreService
  ) {
    this.getEntitys();
    this.createForm();
  }

  ngOnInit(): void {
    this._SESSION.initSessionUser();
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
      publicForce: [, [Validators.required]],
      email: [
        ,
        [
          Validators.required,
          Validators.pattern(emailRegex),
          Validators.minLength(3),
        ],
      ],
      password: [, [Validators.required, Validators.minLength(4)]],
    });
  }

  get controls() {
    return this.form?.controls;
  }

  campoNoValido(campo: string) {
    return (
      this.form?.get(campo)?.invalid &&
      (this.form?.get(campo)?.touched || this.form?.get(campo)?.dirty)
    );
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
        },
        error: (_) => {
          this._TOAST.showError(MESSAGES_DEFAULT.ERROR_CONNECT);
        },
      });
  }

  login(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this._SPINNER.spinnerStatus = true;

      const { publicForce, email, password } = this.form.value;
      const requestAuth: InAuthentication = {
        idEntity: Number(publicForce),
        email,
        password: btoa(password),
      };

      this._AUTH
        .postAuthentication(requestAuth)
        .pipe(takeUntil(this.unSusbscribe$))
        .subscribe({
          next: (auth) => {
            if (auth.code == 200) {
              this._SESSION.setSessionUser(auth.response);
              this._ROUTER.navigateByUrl('home');
            } else this._TOAST.showError(auth.message);
            this._SPINNER.spinnerStatus = false;
          },
          error: (_) => {
            console.error(_);
            this._TOAST.showError(MESSAGES_DEFAULT.ERROR_CONNECT);
            this._SPINNER.spinnerStatus = true;
          },
        });
    }
  }
}
