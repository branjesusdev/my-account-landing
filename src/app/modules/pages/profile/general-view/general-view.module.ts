import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// RESORCES

import { PrimengModule } from '@shModules/primeng/primeng.module';
import { GeneralViewRoutingModule } from '@profile/general-view/general-view-routing.module'

// COMPONENTS

import { GeneralViewMasterComponent } from '@profile/general-view/components/general-view-master/general-view-master.component';
import { GeneralViewHeaderComponent } from './components/general-view-header/general-view-header.component';
import { GeneralViewInformationPersonComponent } from './components/general-view-information-person/general-view-information-person.component';
import { GeneralViewInformationFinancialComponent } from './components/general-view-information-financial/general-view-information-financial.component';


@NgModule({
  declarations: [
    GeneralViewMasterComponent,
    GeneralViewHeaderComponent,
    GeneralViewInformationPersonComponent,
    GeneralViewInformationFinancialComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,

    GeneralViewRoutingModule,
  ],
  providers : []
})
export class GeneralViewModule { }
