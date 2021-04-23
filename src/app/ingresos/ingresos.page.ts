import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class INGRESOSPage{
  ingresos = []

  constructor(private storage: Storage) { }

  async ionViewWillEnter(){
    await this.storage.create()
    this.ingresos = await this.storage.get('ingresos')
  }
}
