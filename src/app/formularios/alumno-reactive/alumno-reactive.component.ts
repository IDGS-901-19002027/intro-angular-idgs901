import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnoForm!: FormGroup;
  matricula!:string;
  nombre!:string;
  edad!:string;
  correo!:string;
  calif!:string;

  constructor(private readonly fb: FormBuilder){
    this.alumnoForm = this.initForm();
  }

  onSubmit():void {
    console.log('Form ->', this.alumnoForm.value)
  }

  obtenerDatos():void{
    this.matricula = this.alumnoForm.get('matricula')?.value
    //console.log('matricula', mat);
    this.nombre = this.alumnoForm.get('nombre')?.value
    //console.log('nombre', nom);
    this.edad = this.alumnoForm.get('edad')?.value
    this.correo = this.alumnoForm.get('correo')?.value
    this.calif = this.alumnoForm.get('calif')?.value
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['', [Validators.required, Validators.minLength(5)]],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      edad:['', [Validators.required]],
      correo: ['', [Validators.required]],
      foto: [''],
      calif:['', [Validators.required]],
    })
  }
}