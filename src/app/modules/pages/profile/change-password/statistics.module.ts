import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SERVICES

import { StatisticsService } from './services/statistics.service';

// COMPONENTS

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsMasterComponent } from './components/statistics-master/statistics-master.component';
import { StatisticsRenderComponent } from './components/statistics-render/statistics-render.component';
import { StatisticsHeaderComponent } from './components/statistics-header/statistics-header.component';

@NgModule({
  declarations: [
    StatisticsMasterComponent,
    StatisticsRenderComponent,
    StatisticsHeaderComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  providers : [
    StatisticsService
  ]
})
export class StatisticsModule { }
