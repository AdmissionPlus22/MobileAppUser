import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admissiondoc1Page } from './admissiondoc1.page';

const routes: Routes = [
  {
    path: '',
    component: Admissiondoc1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admissiondoc1PageRoutingModule {}
