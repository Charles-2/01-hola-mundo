import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flooter',
  templateUrl: './flooter.component.html',
  styleUrls: ['./flooter.component.css']
})
export class FlooterComponent  {

  anio:number;
  constructor(){
 this.anio=new Date().getUTCFullYear();
  }

}
