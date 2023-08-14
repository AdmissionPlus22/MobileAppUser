import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversitydetailPage } from './universitydetail.page';

const routes: Routes = [
  {
    path: '',
    component: UniversitydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitydetailPageRoutingModule {}
