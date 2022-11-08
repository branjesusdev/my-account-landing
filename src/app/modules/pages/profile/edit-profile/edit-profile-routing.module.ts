import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS

import { EditProfileMasterComponent } from '@profile/edit-profile/components/edit-profile-master/edit-profile-master.component';

const routes: Routes = [
  {
    path : '',
    component : EditProfileMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileRoutingModule { }
