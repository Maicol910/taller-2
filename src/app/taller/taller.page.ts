import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TALLERPage{
  ingresos = []
  gastos = []

  constructor(private storage: Storage) { }

  async ionViewWillEnter(){
    await this.storage.create()
    this.gastos = await this.storage.get('gastos'),
    this.ingresos = await this.storage.get('ingresos')
  }
}
