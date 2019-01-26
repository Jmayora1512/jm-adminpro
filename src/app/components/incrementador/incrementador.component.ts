import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';




@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
 
  constructor() {
   // console.log('Leyenda', this.leyenda);
   // console.log('Progreso', this.progreso);
   }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  onChanges( newValue: number ){
   // console.log('NewValue', newValue );
   // console.log('Event', event );

   // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log( elemHTML );
    console.log( this.txtProgress );

    if ( newValue >= 100 ){
      this.progreso = 100;
    }else if ( newValue <= 0 ){
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }
    // return this.cambiarValor;
    // elemHTML.value = (this.progreso);
    // console.log( elemHTML.value );
    // return elemHTML.value;
    this.txtProgress.nativeElement.value = this.progreso;
    // this.cambiarValor.emit ( this.progreso );
    this.txtProgress.nativeElement.focus();

  }
 
  cambiarValor( valor: number ) {

    if( this.progreso >= 100 && valor > 0 ){
      this.progreso = 100;
      return;
    }

    if( this.progreso <= 0 && valor < 0  ){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
     return this.progreso;
    // this.cambiarValor.emit ( this.progreso );
  }


}
