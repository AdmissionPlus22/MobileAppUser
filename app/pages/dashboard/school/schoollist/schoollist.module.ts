import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoollistPageRoutingModule } from './schoollist-routing.module';

import { SchoollistPage } from './schoollist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoollistPageRoutingModule
  ],
  declarations: [SchoollistPage]
})
export class SchoollistPageModule {}
