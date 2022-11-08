import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticsMasterComponent } from '@statistics/components/statistics-master/statistics-master.component';

const routes: Routes = [
  {
    path : '',
    component : StatisticsMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
