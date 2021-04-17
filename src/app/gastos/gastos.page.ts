import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {
  nombre = ''
  descripcion = ''
  fecha = ''
  valor = ''
  gastos = []

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create()
    this.gastos = await this.storage.get('gastos')
  }

  async guardarGastos(){
    if(this.gastos == null){
      this.gastos = []
    }
    this.gastos.push({
      nombre : this.nombre,
      descripcion : this.descripcion,
      fecha : this.fecha,
      valor : this.valor
    })
    await this.storage.set('gastos', this.gastos)
    this.nombre = ''
    this.descripcion = ''
    this.fecha = ''
    this.valor = '' 
  }
}
