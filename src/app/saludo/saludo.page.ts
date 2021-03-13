import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {
  nombre = null;

  constructor(public alertController: AlertController) { }
  
  async saludo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SALUDOS',
      message: 'Hola',
      buttons: ['OK'],
      inputs:[
        {
          name:'nombre',
          type: 'text',
          value:this.nombre
        }
      ]
    });
    
    await alert.present();
  }
  
  ngOnInit() {
  }

}
