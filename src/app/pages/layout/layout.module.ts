import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthorModalComponent } from './modals/author-modal/author-modal.component';
import { PostDetailModalComponent } from './modals/post-detail-modal/post-detail-modal.component';


@NgModule({
  declarations: [NavbarComponent, LayoutComponent, AuthorModalComponent, PostDetailModalComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    LayoutComponent,
    AuthorModalComponent,
    PostDetailModalComponent
  ]
})
export class LayoutModule { }
