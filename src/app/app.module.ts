import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { utlComponent } from './utl/utl.component';
import { ievnComponent } from './ievn/ievn.component';
import { IricComponent } from './grupos/iric/iric.component';
import { MenuComponent } from './grupos/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './grupos/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './grupos/formularios/operas/operas.module';
import { AlumnoFilterPipe } from './grupos/alumno-filter.pipe';
import { CalificacionAlumComponent } from './grupos/calificacion-alum/calificacion-alum.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    // Aquí se declaran los componentes
    AppComponent,
    utlComponent,
    ievnComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    AlumnoFilterPipe,
    CalificacionAlumComponent,
    AlumnoReactiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
