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
      let codigo: string;
      let valido = false;

      // Aqui le digo que lo que devuelva se llame codigoRecibido y realice lo que esta despues de =>
      // Con toPromise, mi programa espera la respuesta del servidor, importante!
      this.http.get<string>(Url).toPromise().then(codigoR => codigo = codigoR);


      if (codigo === codigoInsertado) {
          valido = true;
      }
      console.log(valido); // debug

      return valido;
    }



    /* GET code de servidor
    private getCodeSnippet(): Observable<string> { // Debo definirme tipos de datos que me proporcionen esos valores para recibirlos
      const Url = 'http://localhost:80/api/getCode.php';
      return this.http.get<string>(this.Url);
    }

      this.http.get<string>(Url).subscribe(codigoR => codigo = codigoR); // Me traigo el codigo
    */


  }
