import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmissiondocumentsPageRoutingModule } from './admissiondocuments-routing.module';

import { AdmissiondocumentsPage } from './admissiondocuments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmissiondocumentsPageRoutingModule
  ],
  declarations: [AdmissiondocumentsPage]
})
export class AdmissiondocumentsPageModule {}
