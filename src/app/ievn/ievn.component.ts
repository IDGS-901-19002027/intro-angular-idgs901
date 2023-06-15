// Importar librería
import { Component } from '@angular/core';

// Decorador
@Component({
    selector: 'app-ievn', // Indica el nombre del componente a referenciar
    template: `
    <div>
            <b>Matrícula: </b>{{alumno.matricula}}
        </div>
        <div>
            <b>Nombre: </b>{{alumno.nombre | uppercase}}
        </div>
        <div>
            <b>Edad: </b>{{alumno.edad}}
        </div>
        <div>
            <b>Fecha: </b> {{alumno.fechaNacimiento| date}}
        </div>
        <div>
            <b>Pago: </b> {{alumno.pago | currency}}
        </div>
    `
})

// Crear la clase
export class ievnComponent{
    constructor(){}

    alumno ={
        matricula:1234,
        nombre:'Pedro',
        edad:23,
        fechaNacimiento: new Date(),
        pago:128.38
      };
}