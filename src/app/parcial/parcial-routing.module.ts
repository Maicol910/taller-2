import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcialPage } from './parcial.page';

const routes: Routes = [
  {
    path: '',
    component: ParcialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcialPageRoutingModule {}
