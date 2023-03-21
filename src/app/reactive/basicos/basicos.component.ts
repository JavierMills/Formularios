import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  // ReferenciaFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Javier Mills'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(6)
  // })

  ReferenciaFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(1)]],
    existencias: [, [Validators.required, Validators.min(1)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.ReferenciaFormulario.reset({
      nombre:'Ramiro Javier',
      precio:1800
    })

  }
  validarCampo(value: string) {
    return (
      this.ReferenciaFormulario.controls[value].errors &&
      this.ReferenciaFormulario.controls[value].touched
    );
  }

  guardar() {
    if(this.ReferenciaFormulario.invalid){
      this.ReferenciaFormulario.markAllAsTouched();
      return;
    }

    console.log(this.ReferenciaFormulario.value);
    this.ReferenciaFormulario.reset();
  }
}
