import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchinstitutionlistPageRoutingModule } from './searchinstitutionlist-routing.module';

import { SearchinstitutionlistPage } from './searchinstitutionlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchinstitutionlistPageRoutingModule
  ],
  declarations: [SearchinstitutionlistPage]
})
export class SearchinstitutionlistPageModule {}
