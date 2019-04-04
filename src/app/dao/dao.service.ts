/* tslint:disable:triple-equals*/
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';
import { Cita } from '../model/cita';
import { Anatomia } from '../model/anatomia';
import { Metricas } from '../model/metricas';
import { Dieta } from '../model/dieta';
import { Alimento } from '../model/alimento';
import { Patologia } from '../model/patologia';



const Url = 'http://localhost/api/api.php';

@Injectable({
  providedIn: 'root'
})

export class DaoService {

  constructor(
    private http: HttpClient) { }

    validateCode(code: string): Observable<string> {

      const cadena = {
          action: 'validateCode',
          codigo: code

       };

      return this.http.post<string>(Url, cadena);
    }

    registrarProfesional(profesional: Profesional): Observable<boolean> {
      profesional['action'] = 'creaProfesional';
      const profesionalParse = JSON.stringify(profesional);
      // console.log(profesionalParse);
      return this.http.post<boolean>(Url, profesionalParse);
    }

    login(user: string, pass: string): Observable<any> {
      const UrlAuth = 'http://localhost/api/auth.php';

      const credentials = {
        email: user,
        password: pass

     };
      return this.http.post<any>(UrlAuth, credentials);
    }

    getProfesional(token2: string)  {
      const cadena = {
        action: 'getProfesional',
        token: token2

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Profesional>(Url, cadena);
    }

    getPaciente(token2: string): Observable<Paciente> {
      const cadena = {
        action: 'getPaciente',
        token: token2

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Paciente>(Url, cadena);
    }

    insertaPaciente(profesional: Profesional, paciente: Paciente): Observable<boolean> {

      const cadena = {
        action: 'insertaPaciente',
        Profesional: profesional,
        Paciente: paciente

     };
      console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }


    getPacientesList(profesional: Profesional): Observable<Paciente[]> {
      const cadena = {
        action: 'getPacientesList',
        Profesional: profesional

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Paciente[]>(Url, cadena);
    }


    addCita(paciente: Paciente, cita: Cita): Observable<Cita[]> {
      const cadena = {
        action: 'addCita',
        Paciente: paciente,
        Cita: cita
     };
      console.log(JSON.stringify(cadena));
      return this.http.post<Cita[]>(Url, cadena);
    }

    cancelCita(cita: Cita): Observable<boolean> {

      const cadena = {
        action: 'cancelCita',
        Cita: cita
     };
      console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }

    getCitaPacienteAll(paciente: Paciente): Observable<Cita[]> {

      const cadena = {
        action: 'getCitaPacienteAll',
        Paciente: paciente

     };

      return this.http.post<Cita[]>(Url, cadena);
    }

    getCitaPacienteActiva(paciente: Paciente): Observable<Cita> {

      const cadena = {
        action: 'getCitaPacienteActiva',
        Paciente: paciente

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Cita>(Url, cadena);
    }

    desactivaPaciente(paciente: Paciente): Observable<boolean> {

      const cadena = {
        action: 'desactivaPaciente',
        Paciente: paciente

     };
      console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }

    getAnatomia(paciente: Paciente): Observable<Anatomia[]> {

      const cadena = {
        action: 'getAnatomia',
        Paciente: paciente

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Anatomia[]>(Url, cadena);
    }

    actualizaMedidas(paciente: Paciente, anatomia: Anatomia): Observable<boolean> {

      const cadena = {
        action: 'actualizaMedidas',
        Paciente: paciente,
        Anatomia: anatomia

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }

    actualizaMetricas(paciente: Paciente, metricas: Metricas): Observable<boolean> {

      const cadena = {
        action: 'actualizaMetricas',
        Paciente: paciente,
        Metricas: metricas

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }

    getMetricas(paciente: Paciente): Observable<Metricas[]> {

      const cadena = {
        action: 'getMetricas',
        Paciente: paciente

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Metricas[]>(Url, cadena);
    }


    guardarDieta(paciente: Paciente, dieta: Dieta): Observable<boolean>  {

      const cadena = {
        action: 'guardarDieta',
        Paciente: paciente,
        Dieta: dieta

     };
     // console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }

    getDietas(paciente: Paciente): Observable<Dieta[]> {

      const cadena = {
        action: 'getDietas',
        Paciente: paciente

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Dieta[]>(Url, cadena);
    }

    /////////////////////////////////////////

    getDia(id: number): Observable<any> {

      const cadena = {
        action: 'getDia',
        Id: id

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<any>(Url, cadena);
    }


    getComida(id: number): Observable<any> {

      const cadena = {
        action: 'getComida',
        Id: id

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<any>(Url, cadena);
    }

    getAlimento(nombre: string): Observable<Alimento> {

      const cadena = {
        action: 'getAlimento',
        Nombre: nombre

     };
      console.log(JSON.stringify(cadena));
      return this.http.post<Alimento>(Url, cadena);
    }


    getListaPatologias(): Observable<Patologia[]> {

      const cadena = {
        action: 'getListaPatologias',

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Patologia[]>(Url, cadena);
    }

    getListaPatologiasPaciente(paciente: Paciente): Observable<Patologia[]> {

      const cadena = {
        action: 'getListaPatologiasPaciente',
        Paciente: paciente

     };
      // console.log(JSON.stringify(cadena));
      return this.http.post<Patologia[]>(Url, cadena);
    }

    actualizaPatologias(paciente: Paciente, patologias: Patologia[]): Observable<boolean> {

      const cadena = {
        action: 'actualizaPatologias',
        Paciente: paciente,
        Patologias: patologias

     };
      console.log(JSON.stringify(cadena));
      return this.http.post<boolean>(Url, cadena);
    }


  }
