import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('ReferenciaFormulario') ReferenciaFormulario!: NgForm


  initForm = {
      producto: 'Ingrese Producto',
      precio: 0,
      existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  validarCampo() : boolean{
    return this.ReferenciaFormulario?.controls['producto']?.invalid && this.ReferenciaFormulario?.controls['producto']?.touched
  }

  validarPrecio() : boolean{
    if(this.ReferenciaFormulario?.controls['precio']?.value <= 0 && this.ReferenciaFormulario?.controls['precio']?.touched){
      return true
    }
    return false
  }
  guardar(){
    console.log(this.ReferenciaFormulario);
    this.ReferenciaFormulario.resetForm({
      // producto: 'Sin producto',
      precio: 0,
      existencias: 0
    });
  }
}
