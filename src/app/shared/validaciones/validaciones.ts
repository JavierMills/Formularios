import { FormControl } from "@angular/forms";


// solo validaciones sencillas


export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';


export const  metodo = (control: FormControl) =>{
    const valor = control.value?.trim().toLowerCase();
   if(valor == 'mills'){
    return{
      millsNo: true
    }
   }

   return null
  }