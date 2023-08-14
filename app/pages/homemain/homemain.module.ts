import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemainPageRoutingModule } from './homemain-routing.module';

import { HomemainPage } from './homemain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemainPageRoutingModule
  ],
  declarations: [HomemainPage]
})
export class HomemainPageModule {}
