import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissiondocumentsPage } from './admissiondocuments.page';

const routes: Routes = [
  {
    path: '',
    component: AdmissiondocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissiondocumentsPageRoutingModule {}
