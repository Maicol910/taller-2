import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage{
  gastos = []

  constructor(private storage: Storage) { }
  
  async ionViewWillEnter() {
    await this.storage.create()
    this.gastos = await this.storage.get('gastos')
  }
  
}
