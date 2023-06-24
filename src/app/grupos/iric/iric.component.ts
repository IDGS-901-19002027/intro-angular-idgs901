import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';


@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  imageState: boolean = true;
  listFilter:string= '';
  alumnoTitle!:string;

  showImage():void{
    this.imageState =! this.imageState;
  }

  alumnosIric:IAlumnosIric[]=[
    {
      matricula:1234,
      nombre:'Alex Turner Calvo',
      edad:29,
      correo: 'pedro@gmail.com',
      foto: "https://img.europapress.es/fotoweb/fotonoticia_20180724103317_1200.jpg",
      calif: 6.7
    },
    {
      matricula:1234,
      nombre:'Alex Turner 2013',
      edad:23,
      correo: 'david@gmail.com',
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Alex_Turner_%28musician%29_2011.jpg/220px-Alex_Turner_%28musician%29_2011.jpg",
      calif: 7.5
    },
    {
      matricula:1234,
      nombre:'Alex Turner Actual',
      edad:35,
      correo: 'alex@gmail.com',
      foto: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/83B3/production/_127151733_gettyimages-1421579894.jpg",
      calif: 10
    },
  ];

  onCalificaClick(message:string){
    this.alumnoTitle=`alumnos ${message}`;
  }

}
