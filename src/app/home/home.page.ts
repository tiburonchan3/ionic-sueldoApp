import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  //variable que almacena las horas
  horas:number;
  //variable que  almacena el precio de la hora
  precioHora:number;
  //variable que almacena el monto total sin descuento
  bruto:number = 0;
  //variable que almacena el monto total con descuentos
  liquido:number = 0;
  //varibale que almacena el descuento de ISSS
  isss:number = 0;
  //varibale que almacena el descuento de AFP
  afp:number = 0;
  //varibale que almacena el descuento de renta
  renta:number = 0;
  //varibale que almacena el el sueldo con descuentos
  sueldoDesc:number;
  //varibale que almacena el exceso de monto
  exceso:number;
  //funcion que calcula el sueldo
  calcular(){
    //obtiene el monto bruto 
    this.bruto = this.horas*this.precioHora;
    //verifica si el sueldo es mayor a mil
    if(this.bruto >=1000){
      //si es mayor a mil el descuento es de $30
      this.isss = 30;
    }
    //si no verifica que sea menor  a mil
    else if(this.bruto<1000){
      //aplica el descuento del 3%
      this.isss = this.bruto * 0.03;
    }
    //calcula el afp
    this.afp = this.bruto * 0.07;
    //calcula el descuento del afp y isss
    this.sueldoDesc = this.bruto - (this.afp+this.isss);
    //si el sueldo es mayor a 472 y menor o igual a 895.24
    if(this.sueldoDesc>472 && this.sueldoDesc<=895.24){
      //saca el exceso del suedo
      this.exceso=this.sueldoDesc - 472;
      //calcula la renta 
      this.renta = this.exceso * 0.10 + 17.67;
      //calcula el sueldo con descuento restando la renta
      this.sueldoDesc = this.sueldoDesc - this.renta;
       //igual el sueldo liquido al sueldo con descuento
      this.liquido = this.sueldoDesc;
    }
    //si el sueldo con descuento de afp y isss es mayor a 895.24 y menor o igual a 2038.10
    else if(this.sueldoDesc>895.24 && this.sueldoDesc<=2038.10){
      //saca el exceso del suedo
      this.exceso=this.sueldoDesc - 895.24;
      //calcula la renta 
      this.renta = this.exceso * 0.20 + 60;
      //calcula el sueldo con descuento restando la renta
      this.sueldoDesc = this.sueldoDesc - this.renta;
       //igual el sueldo liquido al sueldo con descuento
      this.liquido = this.sueldoDesc;
    }
    //si el sueldo es mayor a 2018.10
    else if(this.sueldoDesc>2038.10){
      //saca el exceso del suedo
      this.exceso=this.sueldoDesc - 2038.10;
      //calcula la renta
      this.renta = this.exceso * 0.30 + 288.57;
      //calcula el sueldo con descuento restando la renta
      this.sueldoDesc = this.sueldoDesc - this.renta;
       //igual el sueldo liquido al sueldo con descuento
      this.liquido = this.sueldoDesc;
    }
     //si el sueldo es menor a 472 el sueldo liquido sera el sueldo con descuento sin la renta
    else if(this.sueldoDesc){
      //la renta no aplica se iguala a cero
      this.renta = 0;
       //igual el sueldo liquido al sueldo con descuento
      this.liquido = this.sueldoDesc;
    }
  }
}
