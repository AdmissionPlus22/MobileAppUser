import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversitylistPageRoutingModule } from './universitylist-routing.module';

import { UniversitylistPage } from './universitylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversitylistPageRoutingModule
  ],
  declarations: [UniversitylistPage]
})
export class UniversitylistPageModule {}
