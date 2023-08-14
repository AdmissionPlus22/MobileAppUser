import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admissiondoc2Page } from './admissiondoc2.page';

const routes: Routes = [
  {
    path: '',
    component: Admissiondoc2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admissiondoc2PageRoutingModule {}
