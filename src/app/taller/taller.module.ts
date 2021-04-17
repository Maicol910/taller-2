import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TALLERPageRoutingModule } from './taller-routing.module';

import { TALLERPage } from './taller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TALLERPageRoutingModule
  ],
  declarations: [TALLERPage]
})
export class TALLERPageModule {}
