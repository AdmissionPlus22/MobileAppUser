import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admissiondoc2PageRoutingModule } from './admissiondoc2-routing.module';

import { Admissiondoc2Page } from './admissiondoc2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admissiondoc2PageRoutingModule
  ],
  declarations: [Admissiondoc2Page]
})
export class Admissiondoc2PageModule {}
