import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admissiondoc3PageRoutingModule } from './admissiondoc3-routing.module';

import { Admissiondoc3Page } from './admissiondoc3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admissiondoc3PageRoutingModule
  ],
  declarations: [Admissiondoc3Page]
})
export class Admissiondoc3PageModule {}
