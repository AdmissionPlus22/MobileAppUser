import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchooldetailPageRoutingModule } from './schooldetail-routing.module';

import { SchooldetailPage } from './schooldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchooldetailPageRoutingModule
  ],
  declarations: [SchooldetailPage]
})
export class SchooldetailPageModule {}
