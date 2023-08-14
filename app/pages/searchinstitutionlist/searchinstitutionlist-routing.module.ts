import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchinstitutionlistPage } from './searchinstitutionlist.page';

const routes: Routes = [
  {
    path: '',
    component: SearchinstitutionlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchinstitutionlistPageRoutingModule {}
