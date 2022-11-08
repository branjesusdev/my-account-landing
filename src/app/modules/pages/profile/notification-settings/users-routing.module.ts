import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersMasterComponent } from '@users/components/users-master/users-master.component';

const routes: Routes = [
  {
    path : '',
    component : UsersMasterComponent
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
export class UsersRoutingModule { }
