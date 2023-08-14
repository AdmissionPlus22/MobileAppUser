import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoollistPage } from './schoollist.page';

const routes: Routes = [
  {
    path: '',
    component: SchoollistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoollistPageRoutingModule {}
