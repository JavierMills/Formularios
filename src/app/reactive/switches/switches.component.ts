import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  ReferenciaFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  guardar() {
    const formValue = { ...this.ReferenciaFormulario.value };

    delete formValue.condiciones;

    console.log(formValue);
  }

  ngOnInit(): void {
    this.ReferenciaFormulario.reset({
      ...this.persona,
      conciones: false,
    });

    // this.ReferenciaFormulario.get('condiciones')?.valueChanges.subscribe((form) => {
    //     console.log(form);
    //   }
    // );
    this.ReferenciaFormulario.valueChanges.subscribe( form => {
      delete form.condiciones;

      this.persona = form;
      
    })
  }
}
