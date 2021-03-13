import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NostrosPageRoutingModule } from './nosotros-routing.module';

import { NosotrosPage } from './nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NostrosPageRoutingModule
  ],
  declarations: [NosotrosPage]
})
export class NosotrosPageModule {}
