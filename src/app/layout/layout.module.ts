import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ CardComponent, NavbarComponent, NavLinkComponent ],
  exports: [
    CardComponent,
    NavbarComponent,
  ]
})
export class LayoutModule { }