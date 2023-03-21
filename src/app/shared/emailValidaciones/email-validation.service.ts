import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService implements AsyncValidator {

// funcion para realizar petocion asincrona

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value
    console.log(email);
    return this.http.get<any[]>(`http://localhost:3000/Usuarios?q=${email}`)
    .pipe(
      // delay(3000),
      map(respuesta => {
        return (respuesta.length === 0) ? null : { emailError: true}
      })
    )
  }
      
  
}
