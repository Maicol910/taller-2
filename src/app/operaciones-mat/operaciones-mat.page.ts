import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones-mat',
  templateUrl: './operaciones-mat.page.html',
  styleUrls: ['./operaciones-mat.page.scss'],
})
export class OperacionesMatPage implements OnInit {

  constructor() { }
  numero1=null;
  operacion=null;
  numero2=null;
  resultado=null;

  resultado2=[];

  operaciones(){
    if(this.operacion =='/'){
      let resultado = this.numero1/this.numero2
      console.log(resultado)
    }if(this.operacion =='*'){
      let resultado = this.numero1*this.numero2
      console.log(resultado)
    }
  }
 
  ngOnInit() {
  }

}
