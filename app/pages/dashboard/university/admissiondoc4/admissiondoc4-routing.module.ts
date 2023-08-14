import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admissiondoc4Page } from './admissiondoc4.page';

const routes: Routes = [
  {
    path: '',
    component: Admissiondoc4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admissiondoc4PageRoutingModule {}
