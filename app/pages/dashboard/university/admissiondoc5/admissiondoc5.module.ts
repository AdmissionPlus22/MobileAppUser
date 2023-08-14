import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admissiondoc5PageRoutingModule } from './admissiondoc5-routing.module';

import { Admissiondoc5Page } from './admissiondoc5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admissiondoc5PageRoutingModule
  ],
  declarations: [Admissiondoc5Page]
})
export class Admissiondoc5PageModule {}
