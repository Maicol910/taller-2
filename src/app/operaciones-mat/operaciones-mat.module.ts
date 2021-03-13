import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacionesMatPageRoutingModule } from './operaciones-mat-routing.module';

import { OperacionesMatPage } from './operaciones-mat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperacionesMatPageRoutingModule
  ],
  declarations: [OperacionesMatPage]
})
export class OperacionesMatPageModule {}
