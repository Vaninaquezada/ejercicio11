import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio2';

  usuario:Usuario={
    nombre :"",
    clave :""

  };
  nombre:string="";
  clave:string="";

  crear():void{
    this.usuario.clave = this.clave;
    this.usuario.nombre = this.nombre;
  }
}
