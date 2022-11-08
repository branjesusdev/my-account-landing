import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// RESORCES

import { PrimengModule } from '@shModules/primeng/primeng.module';
import { UsersRoutingModule } from '@users/users-routing.module';

// COMPONENTS

import { UsersMasterComponent } from '@users/components/users-master/users-master.component';
import { UsersRecordsComponent } from '@users/components/users-records/users-records.component';
import { UsersHeaderComponent } from '@users/components/users-header/users-header.component';

// SERVICES

import { UsersActionsService } from '@users/services/users-actions.service';
import { UsersAddEditComponent } from './components/users-add-edit/users-add-edit.component';

@NgModule({
  declarations: [
    UsersMasterComponent,
    UsersRecordsComponent,
    UsersHeaderComponent,
    UsersAddEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    PrimengModule
  ],
  providers : [
    UsersActionsService
  ]
})
export class UsersModule { }
