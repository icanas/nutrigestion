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

    getCode(): Observable<string> {
      const Url = 'http://localhost:80/api/getCode.php';
      return this.http.get<string>(Url);
    }

    registrarProfesional(profesional: Profesional): Observable<Profesional> {
      const Url = 'http://localhost:80/api/insertProfesional.php';
      const profesionalParse = JSON.stringify(profesional);
      return this.http.post<Profesional>(Url, profesionalParse);
    }


  }
