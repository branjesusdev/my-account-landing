import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { PrimengModule } from '@shModules/primeng/primeng.module';
import { HotToastModule } from '@ngneat/hot-toast';

import { SessionStorageService } from '@shared/services/code/session-storage.service';
import { LocalStorageService } from '@shared/services/code/local-storage.service';

// DIRECTIVAS

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HotToastModule.forRoot({
      reverseOrder: true,
      dismissible: true,
      autoClose: true,
      position: 'bottom-center',
    }),
    PrimengModule
  ],
  exports: [
    // Modules
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimengModule,

    // directives
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService, SessionStorageService, LocalStorageService],
})
export class SharedModule {}
