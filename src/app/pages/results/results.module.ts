import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';
import { LayoutModule } from '../layout/layout.module';
import { ApirestService } from 'src/app/services/apirest.service';


@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    LayoutModule,
    InfiniteScrollModule
  ],
  providers: [
    ApirestService
  ]
})
export class ResultsModule { }
