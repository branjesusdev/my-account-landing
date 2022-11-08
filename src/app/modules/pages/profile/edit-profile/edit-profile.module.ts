import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RESORCES

import { PrimengModule } from '@shModules/primeng/primeng.module';
import { EditProfileRoutingModule } from '@profile/edit-profile/edit-profile-routing.module';

// COMPONENTS


import { EditProfileHeaderComponent } from '@profile/edit-profile/components/edit-profile-header/edit-profile-header.component';
import { EditProfileMasterComponent } from '@profile/edit-profile/components/edit-profile-master/edit-profile-master.component';
import { EditProfileRecordsComponent } from '@profile/edit-profile/components/edit-profile-records/edit-profile-records.component';


@NgModule({
  declarations: [
    EditProfileMasterComponent,
    EditProfileRecordsComponent,
    EditProfileHeaderComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,

    PrimengModule
  ],
  providers : []
})
export class SequenceModule { }
