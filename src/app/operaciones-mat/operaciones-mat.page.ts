import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones-mat',
  templateUrl: './operaciones-mat.page.html',
  styleUrls: ['./operaciones-mat.page.scss'],
})
export class OperacionesMatPage implements OnInit {
  numero1=null;
  operacion=null;
  numero2=null;
  resultado=null;

  constructor() { }

  operaciones(){
    if(this.operacion =='/'){
      this.resultado = this.numero1/this.numero2
      console.log(this.resultado)
    }if(this.operacion =='*'){
      this.resultado = this.numero1*this.numero2
      console.log(this.resultado)
    }if(this.operacion =='-'){
      this.resultado = this.numero1-this.numero2
      console.log(this.resultado)
    }if(this.operacion =='+'){
      this.resultado= parseInt(this.numero1)+parseInt(this.numero2)
      console.log(this.resultado)
    }
  }
 
  ngOnInit() {
  }

}
