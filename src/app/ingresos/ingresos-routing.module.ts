import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { INGRESOSPage } from './ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: INGRESOSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class INGRESOSPageRoutingModule {}
