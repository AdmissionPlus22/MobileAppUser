import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemainPage } from './homemain.page';

const routes: Routes = [
  {
    path: '',
    component: HomemainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemainPageRoutingModule {}
