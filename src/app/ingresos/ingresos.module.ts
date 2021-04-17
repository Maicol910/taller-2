import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { INGRESOSPageRoutingModule } from './ingresos-routing.module';

import { INGRESOSPage } from './ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    INGRESOSPageRoutingModule
  ],
  declarations: [INGRESOSPage]
})
export class INGRESOSPageModule {}
