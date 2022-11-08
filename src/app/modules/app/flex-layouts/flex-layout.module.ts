import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// COMPONENTS STATIC

import { SharedModule } from '@shared/shared.module';


// _LAYOUT

import { ProfileMainComponent } from '@fxLayouts/profile/profile-main/profile-main.component';
import { ProfileHeaderComponent } from '@fxLayouts/profile/profile-header/profile-header.component';
import { ProfileFooterComponent } from '@fxLayouts/profile/profile-footer/profile-footer.component';
import { ProfileActionsComponent } from '@fxLayouts/profile/profile-actions/profile-actions.component';

@NgModule({
  declarations: [
    ProfileMainComponent,
    ProfileHeaderComponent,
    ProfileFooterComponent,
    ProfileActionsComponent
  ],
  imports : [
    RouterModule,
    CommonModule,

    SharedModule
  ]
})
export class FlexLayoutsModule { }
