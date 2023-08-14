import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admissiondoc4PageRoutingModule } from './admissiondoc4-routing.module';

import { Admissiondoc4Page } from './admissiondoc4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admissiondoc4PageRoutingModule
  ],
  declarations: [Admissiondoc4Page]
})
export class Admissiondoc4PageModule {}
