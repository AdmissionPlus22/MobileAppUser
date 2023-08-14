import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admissiondoc1PageRoutingModule } from './admissiondoc1-routing.module';

import { Admissiondoc1Page } from './admissiondoc1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admissiondoc1PageRoutingModule
  ],
  declarations: [Admissiondoc1Page]
})
export class Admissiondoc1PageModule {}
