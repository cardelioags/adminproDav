import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    let contador = 0;
    const promesa = new Promise( (resolve, reject) => {
      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if ( contador === 3) {
          resolve( 'Ok!' );
          // reject('simplemente un error');
          clearInterval(intervalo);
        }

      }, 1000 );
    } );

    promesa.then(
      mensaje => console.log('Termino!', mensaje)
    ).catch( error => console.error('Error en la promesa', error));
   }

  ngOnInit() {
  }

}
