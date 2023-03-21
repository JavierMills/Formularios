import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern         : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }


  metodo(control: FormControl) : ValidationErrors | null{
    const valor = control.value?.trim().toLowerCase();
   if(valor == 'mills'){
    return{
      millsNo: true
    }
   }

   return null
  }

  equals(campo1: string, campo2:string){

    return (formGrup: AbstractControl): ValidationErrors | null =>{
      const error1 = formGrup.get(campo1)?.value;
      const error2 = formGrup.get(campo2)?.value;

      // console.log(error1, error2);

      if( error1 !== error2){
        formGrup.get(campo2)?.setErrors({
          noEquals: true
        })
        return {
          noEquals: true
        }
      }
formGrup.get(campo2)?.setErrors(null);
      return null
    }
  }
}
