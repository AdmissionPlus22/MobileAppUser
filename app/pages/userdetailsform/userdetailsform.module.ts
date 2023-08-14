import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdetailsformPageRoutingModule } from './userdetailsform-routing.module';

import { UserdetailsformPage } from './userdetailsform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdetailsformPageRoutingModule
  ],
  declarations: [UserdetailsformPage]
})
export class UserdetailsformPageModule {}
