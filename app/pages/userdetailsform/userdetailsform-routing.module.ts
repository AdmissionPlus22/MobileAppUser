import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdetailsformPage } from './userdetailsform.page';

const routes: Routes = [
  {
    path: '',
    component: UserdetailsformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdetailsformPageRoutingModule {}
