/* tslint:disable:triple-equals*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(
    private http: HttpClient) { }


    isValid(codigoInsertado: string): boolean {

      const Url = 'http://localhost:80/api/getCode.php';
      let valido = false;

      // Aqui le digo que lo que devuelva se llame codigoRecibido y realice lo que esta despues de =>
      // Con toPromise, mi programa espera la respuesta del servidor, importante!

      this.http.get<string>(Url).toPromise().then(
        codigoR => {
          if (codigoInsertado == codigoR) {
            valido = true;
        }
          console.log(codigoR); // debug
          console.log(valido);
        });



      return valido;
    }


    /* GET code de servidor
    private getCodeSnippet(): Observable<string> { // Debo definirme tipos de datos que me proporcionen esos valores para recibirlos
      const Url = 'http://localhost:80/api/getCode.php';
      return this.http.get<string>(this.Url);
    }
      this.http.get<string>(Url).subscribe(codigoR => codigo = codigoR);
      this.http.get<string>(Url).subscribe(codigoR => codigo = codigoR); // Me traigo el codigo
      this.http.get<string>(Url).toPromise().then((response: any) => {  this.codigo1 = response.results; });

            this.http.get<string>(Url).toPromise().then(
        recibido => {
          this.codigo = recibido;
          console.log(this.codigo);
        }
    ).catch( e => {
        alert('error fetching data');
    });
    */


  }
