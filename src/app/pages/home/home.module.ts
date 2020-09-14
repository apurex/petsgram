import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { ApirestService } from 'src/app/services/apirest.service';
import { PostsComponent } from './partials/posts/posts.component';


@NgModule({
  declarations: [HomeComponent, PostsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    InfiniteScrollModule
  ],
  providers: [
    ApirestService
  ]
})
export class HomeModule { }
