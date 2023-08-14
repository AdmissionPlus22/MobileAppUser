import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegedetailPage } from './collegedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CollegedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegedetailPageRoutingModule {}
