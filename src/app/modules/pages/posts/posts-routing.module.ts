import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS

import { PostsMasterComponent } from '@posts/components/posts-master/posts-master.component';
import { PostsRecordsComponent } from '@posts/components/posts-records/posts-records.component';

const routes: Routes = [
  {
    path: '',
    component : PostsMasterComponent,
    children : [
      {
        path : 'login',
        component : PostsRecordsComponent
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
