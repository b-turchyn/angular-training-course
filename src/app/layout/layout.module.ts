import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './nav-link/nav-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ NavbarComponent, NavLinkComponent ],
  exports: [
    NavbarComponent,
  ]
})
export class LayoutModule { }