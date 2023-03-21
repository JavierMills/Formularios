import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidationService } from 'src/app/shared/emailValidaciones/email-validation.service';
import { ValidacionesService } from 'src/app/shared/validaciones/validaciones.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  

  formValidaciones: FormGroup = this.fb.group({

   nombre:   ['',[Validators.required, Validators.pattern(this.validaciones.nombreApellidoPattern)]],
   email:    ['',[Validators.required, Validators.pattern(this.validaciones.emailPattern)],[this.emailValidation]],
   username: ['',[Validators.required, this.validaciones.metodo]],
   password: ['',[Validators.required, Validators.minLength(6)]],
   confirm:  ['',[Validators.required]]

  },{
    validators:[this.validaciones.equals('password', 'confirm')]
  })

  // emailErrorMsg: string = "";

  get emailErrorMsg(): string{
    const errors = this.formValidaciones.get('email')?.errors

    if(errors?.['required']){
      return 'El correo debe ser obligatorio'
    }else if(errors?.['pattern']){
      return 'Debe ser en formato correcto'
    }else if(errors?.['emailError']){
      return 'El email ya existe'
    }

    return ''
  }

  constructor(private fb:FormBuilder, private validaciones: ValidacionesService, private emailValidation: EmailValidationService) { }

  ngOnInit(): void {
    this.formValidaciones.reset({
      nombre: 'Ramiro Javier',
      email: 'test1@test.com',
      username:'DimeMills',
      password:'123456',
      confirm:'123456'
    })
  }
  validarCampo(campo: string){
    return (
      this.formValidaciones.get(campo)?.errors &&
      this.formValidaciones.get(campo)?.touched
    );
  }

  procesar(){

    console.log(this.formValidaciones.value);
    this.formValidaciones.markAllAsTouched()
  }

  // emailRequired(){
  //   return (
  //     this.formValidaciones.get('email')?.errors?.['required'] &&
  //     this.formValidaciones.get('email')?.touched
  //   );
  // }

  // emailFormat(){
  //   return (
  //     this.formValidaciones.get('email')?.errors?.['pattern'] &&
  //     this.formValidaciones.get('email')?.touched
  //   );
  // }

  // emailTomado(){
  //   return (
  //     this.formValidaciones.get('email')?.errors?.['emailError'] &&
  //     this.formValidaciones.get('email')?.touched
  //   );
  // }
}
