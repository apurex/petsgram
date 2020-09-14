import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [NavbarComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
