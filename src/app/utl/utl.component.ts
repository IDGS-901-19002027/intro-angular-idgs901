// Importar librería
import { Component } from '@angular/core';

// Decorador
@Component({
    selector: 'app-utl', // Indica el nombre del componente a referenciar
    template: `
        <form>
            <label for="">Nombre:</label>
            <input type="text" value="">
            <button class="btn btn-primary">Ingresa</button>
        </form>
    `
})

// Crear la clase
export class utlComponent{
    constructor(){}
}