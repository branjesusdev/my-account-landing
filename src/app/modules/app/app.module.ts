import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';


// _LAYOUT

import { FlexLayoutsModule } from '@app/flex-layouts/flex-layout.module';


// INTERCEPTOR

import { InterceptorService } from '@shared/interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutsModule,
  ],
  providers:
  [
    MessageService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
