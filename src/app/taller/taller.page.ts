import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TALLERPage{
  nombre = ''
  descripcion = ''
  fecha = ''
  valor = ''
  gastos = []
  ingresos = []
  
  constructor(private storage: Storage) { }

  async ionViewWillEnter(){
    await this.storage.create()
    this.gastos = await this.storage.get('gastos'),
    this.ingresos = await this.storage.get('ingresos')
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
    console.log(this.gastos)
  }

  async guardarIngresos(){
    if(this.ingresos == null){
      this.ingresos = []
    }
    this.ingresos.push({
      nombres : this.nombre,
      descripciones : this.descripcion,
      fechas : this.fecha,
      valores : this.valor
    })
    await this.storage.set('ingresos', this.ingresos)
    this.nombre = ''
    this.descripcion = ''
    this.fecha = ''
    this.valor = ''
  }
}
