import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admissiondoc6PageRoutingModule } from './admissiondoc6-routing.module';

import { Admissiondoc6Page } from './admissiondoc6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admissiondoc6PageRoutingModule
  ],
  declarations: [Admissiondoc6Page]
})
export class Admissiondoc6PageModule {}
