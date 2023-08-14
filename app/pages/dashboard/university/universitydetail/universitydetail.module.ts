import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversitydetailPageRoutingModule } from './universitydetail-routing.module';

import { UniversitydetailPage } from './universitydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversitydetailPageRoutingModule
  ],
  declarations: [UniversitydetailPage]
})
export class UniversitydetailPageModule {}
