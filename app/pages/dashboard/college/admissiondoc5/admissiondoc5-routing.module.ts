import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admissiondoc5Page } from './admissiondoc5.page';

const routes: Routes = [
  {
    path: '',
    component: Admissiondoc5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admissiondoc5PageRoutingModule {}
