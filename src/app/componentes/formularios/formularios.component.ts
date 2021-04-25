import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = this.getInicioFormu();
  f: FormGroup;

  constructor(private fb:FormBuilder) {
    this.f = fb.group({
      nombre: ['', 
        Validators.compose([
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(15)
        ])],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      contacto: fb.group({
        email: ['', Validators.required],
        telefono: ['', Validators.required],
      }),      
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  getInicioFormu() {
    return {
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      password: ''
    }
  }

  enviarTD(loginForm){
    console.log(this.formu);

    this.formu = this.getInicioFormu();

    loginForm.form.reset();
  }

  enviarRF(){
    console.log(this.f.value)
  }
}
