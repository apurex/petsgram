import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { ApirestService } from 'src/app/services/apirest.service';
import { PostsComponent } from './partials/posts/posts.component';
import { PostModalComponent } from './modals/post-modal/post-modal.component';
import { ProfileComponent } from './modals/profile/profile.component';


@NgModule({
  declarations: [HomeComponent, PostsComponent, PostModalComponent, ProfileComponent],
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
