import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  mensaje: string = "Hola mundo";
  valor1: number = 123;
  valor2: number = 456;
  valor3: number = 789;
  valor4: number = 1789;
  contador: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  modificar(e){
    this.valor3 = e.target.value;
  }
}
