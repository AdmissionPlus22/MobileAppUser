import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admissiondoc6Page } from './admissiondoc6.page';

const routes: Routes = [
  {
    path: '',
    component: Admissiondoc6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admissiondoc6PageRoutingModule {}
