import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutiondetailsPage } from './institutiondetails.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutiondetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutiondetailsPageRoutingModule {}
