import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1!:number;
  num2!:number;
  resultado!:number;
  operacionSeleccionada:string='suma';
  tipoOperaciones=[
    'Suma',
    'Resta',
    'Multiplicación',
    'División'
  ];

  calcular(){
    switch(this.operacionSeleccionada){
      case 'Suma':
        this.resultado=this.num1 + this.num2;
        break;
      case 'Resta':
        this.resultado=this.num1 - this.num2;
        break;
      case 'Multiplicación':
        this.resultado=this.num1 * this.num2;
        break;
      case 'División':
        this.resultado=this.num1 / this.num2;
        break;
      default:
        this.resultado= 0;
    }
  }
}
