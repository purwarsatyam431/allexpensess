import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibRoutingModule } from './lib-routing.module';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    LibRoutingModule
  ]
})
export class LibModule { }
