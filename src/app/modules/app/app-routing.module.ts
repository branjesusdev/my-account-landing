import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// RESOURCES

import { ROUTES } from '@shared/config/routes';


// COMPONENTS

import { ProfileMainComponent } from '@app/flex-layouts/profile/profile-main/profile-main.component';



const routes: Routes = [
  {
    path: ROUTES.PF_GENERAL_VIEW,
    component: ProfileMainComponent,
    loadChildren: () => import('@pages/profile/general-view/general-view.module').then(m => m.GeneralViewModule),
    pathMatch: 'full'
  },
  {
    path: ROUTES.PF_EDIT_PROFILE,
    component: ProfileMainComponent,
    loadChildren: () => import('@pages/profile/edit-profile/edit-profile-routing.module').then(m => m.EditProfileRoutingModule),
    pathMatch: 'full'
  },
  {
    path: ROUTES.PT_POSTS,
    component: ProfileMainComponent,
    loadChildren: () => import('@posts/posts.module').then(m => m.PostsModule),
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo : ROUTES.PF_GENERAL_VIEW,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
