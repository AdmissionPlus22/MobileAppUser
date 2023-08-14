import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegedetailPageRoutingModule } from './collegedetail-routing.module';

import { CollegedetailPage } from './collegedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegedetailPageRoutingModule
  ],
  declarations: [CollegedetailPage]
})
export class CollegedetailPageModule {}
