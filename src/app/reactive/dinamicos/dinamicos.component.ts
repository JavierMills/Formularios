import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

 
  ReferenciaFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Gears',Validators.required],
      ['Halo infinitty',Validators.required]
    ],[Validators.required])
  });

nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArreglo(){
    return this.ReferenciaFormulario.get('favoritos') as FormArray;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArreglo.push( this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  validarCampo(value: string) {
    return (
      this.ReferenciaFormulario.controls[value].errors &&
      this.ReferenciaFormulario.controls[value].touched
    );
  }

  borrar(indice: number){
    this.favoritosArreglo.removeAt(indice)
  }

  guardar(){
    if(this.ReferenciaFormulario.valid){
      console.log(this.ReferenciaFormulario.value);
    }else{
      this.ReferenciaFormulario.markAllAsTouched();
    }
  }

}
