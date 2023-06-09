import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Ramiro',
    favoritos: [
      {id: 1, nombre: 'Gears 6'}, 
      {id: 2, nombre: 'Halo infinity'}
    ]
  }


  guardar(){

  }

  eliminar(indice: number){
    this.persona.favoritos.splice(indice, 1)
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego	
    }

    this.persona.favoritos.push( {...nuevoFavorito} )
    this.nuevoJuego= '';
  }
}
