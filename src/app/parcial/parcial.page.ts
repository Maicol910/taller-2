import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.page.html',
  styleUrls: ['./parcial.page.scss'],
})
export class ParcialPage implements OnInit {
  constructor(public navCtrl: NavController) {
  }  
  
  resultado=null;
  bandera=null;
  datos=[]
 
  numero1(numero1){
    this.datos.push(numero1)
    if(this.bandera==0){
      this.bandera=1
      this.resultado=numero1
    }else
    this.resultado+= numero1
    console.log(this.datos)
  }
  
  operaciones(simbol){
    this.datos.push(simbol)
    this.bandera=null
  }

  eliminar(){
    this.datos=[]
    this.resultado=null
  }

  resultadoFinal(){
    this.resultado=eval(this.datos.join(''))
    this.bandera=null
  }

  ngOnInit() {
  }

}
