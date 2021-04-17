import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TALLERPage implements OnInit {
  ingresos = []
  gastos = []

  constructor(private storage: Storage) { }
  
  async ngOnInit(){
    await this.storage.create()
    this.gastos = await this.storage.get('gastos')
    this.ingresos = await this.storage.get('ingresos')
  }

  async doRefresh(event) {
    this.gastos = await this.storage.get('gastos')
    this.ingresos = await this.storage.get('ingresos')
    setTimeout(()=>{
      event.target.complete();
    }, 1500);
  }
  
  
  
}
