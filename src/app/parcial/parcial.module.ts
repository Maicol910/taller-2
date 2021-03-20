import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcialPageRoutingModule } from './parcial-routing.module';

import { ParcialPage } from './parcial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParcialPageRoutingModule
  ],
  declarations: [ParcialPage]
})
export class ParcialPageModule {}
