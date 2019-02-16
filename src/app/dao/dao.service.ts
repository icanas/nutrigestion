/* tslint:disable:triple-equals*/
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';

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
      return this.http.post<boolean>(Url, profesionalParse);
    }

    login(user: string, pass: string): Observable<Profesional> {
      const Url = 'http://localhost/api/auth.php';

      const credentials = {
        email: user,
        password: pass

     };
      return this.http.post<Profesional>(Url, credentials);
    }

    getProfesional(token2: string): Observable<Profesional>{
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'getProfesional',
        token: token2

     };
      return this.http.post<Profesional>(Url, cadena);
    }

    insertaPaciente(profesional: Profesional, paciente: Paciente): Observable<boolean> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'insertaPaciente',
        Profesional: profesional,
        Paciente: paciente

     };
      return this.http.post<boolean>(Url, cadena);
    }


    getPacientesList(profesional: Profesional): Observable<Paciente[]> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'getPacientesList',
        Profesional: profesional,

     };
      return this.http.post<Paciente[]>(Url, cadena);
    }


  }
