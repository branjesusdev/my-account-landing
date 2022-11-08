import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS

import { AuthMasterComponent } from '@auth/components/auth-master/auth-master.component';
import { AuthLoginComponent } from '@auth/components/auth-login/auth-login.component';

const routes: Routes = [
  {
    path: '',
    component : AuthMasterComponent,
    children : [
      {
        path : 'login',
        component : AuthLoginComponent
      },
      {
        path : '**',
        redirectTo :'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
