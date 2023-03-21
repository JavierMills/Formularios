import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[customMin] [ngModel]',
  providers:[{
      provide: NG_VALIDATORS,
      useExisting: CostumMinDirective,
      multi:true
  }]
})


export class CostumMinDirective implements Validators {
  @Input() minimo!: number;

  constructor(){
      console.log('directive', this.minimo);
  }

  validate(control: FormControl){
      const inputValue = control.value;
      return (inputValue < this.minimo)
      ? {'customMin' : true}
      : null
  }
}
