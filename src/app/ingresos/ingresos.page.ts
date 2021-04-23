import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class INGRESOSPage implements OnInit {
  nombres = ''
  descripciones = ''
  fechas = ''
  valores = ''
  ingresos = []

  constructor(private storage: Storage) { }

  async ngOnInit(){
    await this.storage.create()
    this.ingresos = await this.storage.get('ingresos')
  }
  async guardarIngresos(){
    if(this.ingresos == null){
      this.ingresos = []
    }
    this.ingresos.push({
      nombres : this.nombres,
      descripciones : this.descripciones,
      fechas : this.fechas,
      valores : this.valores
    })
    await this.storage.set('ingresos', this.ingresos)
    this.nombres = ''
    this.descripciones = ''
    this.fechas = ''
    this.valores = ''
  }

}
