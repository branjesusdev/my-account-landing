import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';


// RESOURCES

import { PostsRoutingModule } from '@posts/posts-routing.module';
import { SharedModule } from '@shared/shared.module';
import { InterceptorService } from '@shared/interceptors/interceptor.service'

// COMPONENTS

import { PostsMasterComponent } from '@posts/components/posts-master/posts-master.component';
import { PostsRecordsComponent } from '@posts/components/posts-records/posts-records.component';


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
  providers: [MessageService, InterceptorService]
})
export class PostsModule { }
