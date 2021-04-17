import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TALLERPage } from './taller.page';

const routes: Routes = [
  {
    path: '',
    component: TALLERPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TALLERPageRoutingModule {}
