import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  mostrar:boolean = false;
  personas:string[] = [
    'Pedro',
    'Cecilia',
    'Maria',
    'Juan'
  ];

  alumnos:Array<object> = [
    { nombre: 'Juan', apellido: 'Tomasi' , edad: 28, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-512.png' },
    { nombre: 'Carlos', apellido: 'Perez' , edad: 31, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png' },
    { nombre: 'Peter', apellido: 'Gomez' , edad: 24, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png' },
    { nombre: 'Luis', apellido: 'Blanco' , edad: 20, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png' },
  ];

  color:string;

  constructor() { }

  ngOnInit(): void {
  }

  eliminarAlumno(index){
    this.alumnos.splice(index,1);
  }

  alumno:any = {
    nombre: '',
    apellido: '',
    edad: '',
    curso: '',
    foto: '',
  }

  agregarAlumno() {
    this.alumnos.push(this.alumno)
  }

}
