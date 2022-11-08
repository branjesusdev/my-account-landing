import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralViewMasterComponent } from '@profile/general-view/components/general-view-master/general-view-master.component';

const routes: Routes = [
  {
    path : '',
    component : GeneralViewMasterComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralViewRoutingModule { }
