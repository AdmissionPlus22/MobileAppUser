import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admissiondoc3Page } from './admissiondoc3.page';

const routes: Routes = [
  {
    path: '',
    component: Admissiondoc3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admissiondoc3PageRoutingModule {}
