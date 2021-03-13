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
    if(this.nombre ==""  || this.nombre == null){
      const alert2 = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'SALUDOS',
        message: 'El campo nombre se encuentra vacio, no te puedo saludar :( ',
        buttons: ['OK'],
      });
      await alert2.present();
    }else{
      if(this.nombre==this.nombre){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'SALUDOS',
          message: 'Hola'+ ' ' + this.nombre,
          buttons: ['OK'],
        });
        await alert.present();
    }
  }
}

  
  ngOnInit() {
  }

}
