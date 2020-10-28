import {Component}from '@angular/core';

@Component ({
    selector:'app-body',
     templateUrl: './body.component.html'
     
     
    

})
export class BodyComponent {

    mostrar=true;
    frase:any={
        mensaje:'Tengo que terminar la capacitación',
        autor: 'Por la clase de PBD'
    };

    personajes: String[]=['Charles','Rauuul','Profe Roberto'];


}