/* tslint:disable:triple-equals*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profesional } from '../actores/profesional';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(
    private http: HttpClient) { }

    validateCode(code: string): Observable<string> {
      const Url = 'http://localhost/api/api.php';

      let cadena = 
      {
          "action": "validateCode",
          "codigo": code

      };

      return this.http.post<string>(Url, cadena);
    }

    registrarProfesional(profesional: Profesional): Observable<string> {
      const Url = 'http://localhost/api/api.php';
      profesional['action'] = "test";
      const profesionalParse = JSON.stringify(profesional);
      console.log(profesionalParse);
      return this.http.post<string>(Url, profesionalParse);
    }


  }
