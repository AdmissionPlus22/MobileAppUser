import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchooldetailPage } from './schooldetail.page';

const routes: Routes = [
  {
    path: '',
    component: SchooldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchooldetailPageRoutingModule {}
