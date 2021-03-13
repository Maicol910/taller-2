import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionesMatPage } from './operaciones-mat.page';

const routes: Routes = [
  {
    path: '',
    component: OperacionesMatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionesMatPageRoutingModule {}
