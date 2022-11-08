import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// RESOURCES

import { SharedModule } from '@shared/shared.module';
import { MessageService } from 'primeng/api';


import { PostsRoutingModule } from '@posts/posts-routing.module';

// COMPONENTS

import { PostsMasterComponent } from '@posts/components/posts-master/posts-master.component';
import { PostsRecordsComponent } from '@posts/components/posts-records/auth-login.component';


@NgModule({
  declarations: [
    PostsMasterComponent,
    PostsRecordsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PostsRoutingModule,

    SharedModule
  ],
  providers: [MessageService]
})
export class PostsModule { }
