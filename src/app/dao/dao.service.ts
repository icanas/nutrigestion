/* tslint:disable:triple-equals*/
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profesional } from '../model/profesional';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(
    private http: HttpClient) { }

    validateCode(code: string): Observable<string> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
          action: 'validateCode',
          codigo: code

       };

      return this.http.post<string>(Url, cadena);
    }

    registrarProfesional(profesional: Profesional): Observable<boolean> {
      const Url = 'http://localhost/api/api.php';
      profesional['action'] = 'creaProfesional';
      const profesionalParse = JSON.stringify(profesional);
      console.log(profesionalParse);
      return this.http.post<boolean>(Url, profesionalParse);
    }

    login(user: string, pass: string): Observable<Profesional> {
      const Url = 'http://localhost/api/api.php';

      const credentials = {
        email: user,
        password: pass

     };
      console.log(credentials);
      return this.http.post<Profesional>(Url, credentials);
    }


  }
