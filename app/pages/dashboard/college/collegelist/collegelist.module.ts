import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegelistPageRoutingModule } from './collegelist-routing.module';

import { CollegelistPage } from './collegelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegelistPageRoutingModule
  ],
  declarations: [CollegelistPage]
})
export class CollegelistPageModule {}
