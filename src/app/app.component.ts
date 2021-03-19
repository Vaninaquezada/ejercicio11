import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1';
  edadUno:number =0;
  edadDos:number =0;

  resSuma:number =0;
  resPromedio:number =0;

  promedio():void{
    this.resPromedio = this.resSuma/2;

  }
  suma():void{
    this.resSuma= +this.edadUno + +this.edadDos;
  }

  limpiar():void{
    this.edadUno= 0;
    this.edadDos= 0;
    this.resPromedio= 0;
    this.resSuma=0
  }
  calcular():void{
    this.suma();
    this.promedio();
    
  }

}
