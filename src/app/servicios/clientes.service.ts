import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes:string[] = [
    "Juan",
    "Diego",
    "Lucia",
    "Florencia"
  ];

  constructor() { }

  getClientes():string[] {
    return this.clientes;
  }

  agregarCliente(cliente) {
    this.clientes.push(cliente);
  }

  borrarUltimoCliente() {
    this.clientes.pop();
  }
}
