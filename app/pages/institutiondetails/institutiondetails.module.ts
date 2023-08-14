import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutiondetailsPageRoutingModule } from './institutiondetails-routing.module';

import { InstitutiondetailsPage } from './institutiondetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutiondetailsPageRoutingModule
  ],
  declarations: [InstitutiondetailsPage]
})
export class InstitutiondetailsPageModule {}
