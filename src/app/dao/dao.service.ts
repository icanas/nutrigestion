/* tslint:disable:triple-equals*/
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';
import { Cita } from '../model/cita';

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
      // console.log(profesionalParse);
      return this.http.post<boolean>(Url, profesionalParse);
    }

    login(user: string, pass: string): Observable<any> {
      const Url = 'http://localhost/api/auth.php';

      const credentials = {
        email: user,
        password: pass

     };
      return this.http.post<any>(Url, credentials);
    }

    getProfesional(token2: string): Observable<Profesional> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'getProfesional',
        token: token2

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Profesional>(Url, cadena);
    }

    getPaciente(token2: string): Observable<Paciente> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'getPaciente',
        token: token2

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Paciente>(Url, cadena);
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
        Profesional: profesional

     };
      console.log(JSON.stringify(cadena));
      return this.http.post<Paciente[]>(Url, cadena);
    }

    addCita(paciente: Paciente, cita: Cita): Observable<Cita[]> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'addCita',
        Paciente: paciente,
        Cita: cita
     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Cita[]>(Url, cadena);
    }

    cancelCita(cita: Cita): Observable<boolean> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'cancelCita',
        Cita: cita
     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }

    getCitaPacienteAll(paciente: Paciente): Observable<Cita[]> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'getCitaPacienteAll',
        Paciente: paciente

     };

      return this.http.post<Cita[]>(Url, cadena);
    }

    getCitaPacienteActiva(paciente: Paciente): Observable<Cita> {
      const Url = 'http://localhost/api/api.php';

      const cadena = {
        action: 'getCitaPacienteActiva',
        Paciente: paciente

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Cita>(Url, cadena);
    }


  }
