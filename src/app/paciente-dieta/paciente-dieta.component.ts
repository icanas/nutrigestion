import { Component, OnInit } from '@angular/core';

import { Paciente } from '../model/paciente';
import { Alimento } from '../model/alimento';
import { Dieta } from '../model/dieta';

import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-paciente-dieta',
  templateUrl: './paciente-dieta.component.html',
  styleUrls: ['./paciente-dieta.component.css']
})
export class PacienteDietaComponent implements OnInit {

  constructor(
    private daoService: DaoService
  ) { }

  paciente: Paciente = new Paciente();
  dieta: Dieta = new Dieta();

  desayunoLunes: Alimento[] = [];
  postDesayunoLunes: Alimento[] = [];
  comidaLunes: Alimento[] = [];
  meriendaLunes: Alimento[] = [];
  cenaLunes: Alimento[] = [];

  desayunoMartes: Alimento[] = [];
  postDesayunoMartes: Alimento[] = [];
  comidaMartes: Alimento[] = [];
  meriendaMartes: Alimento[] = [];
  cenaMartes: Alimento[] = [];

  desayunoMiercoles: Alimento[] = [];
  postDesayunoMiercoles: Alimento[] = [];
  comidaMiercoles: Alimento[] = [];
  meriendaMiercoles: Alimento[] = [];
  cenaMiercoles: Alimento[] = [];

  desayunoJueves: Alimento[] = [];
  postDesayunoJueves: Alimento[] = [];
  comidaJueves: Alimento[] = [];
  meriendaJueves: Alimento[] = [];
  cenaJueves: Alimento[] = [];

  desayunoViernes: Alimento[] = [];
  postDesayunoViernes: Alimento[] = [];
  comidaViernes: Alimento[] = [];
  meriendaViernes: Alimento[] = [];
  cenaViernes: Alimento[] = [];

  desayunoSabado: Alimento[] = [];
  postDesayunoSabado: Alimento[] = [];
  comidaSabado: Alimento[] = [];
  meriendaSabado: Alimento[] = [];
  cenaSabado: Alimento[] = [];

  desayunoDomingo: Alimento[] = [];
  postDesayunoDomingo: Alimento[] = [];
  comidaDomingo: Alimento[] = [];
  meriendaDomingo: Alimento[] = [];
  cenaDomingo: Alimento[] = [];


  // El boton mas lo que va a hacer es hacer push al array de desayuno

  mas(dia: string, franja: string) {

    switch (dia) {
      case 'Lunes':

        switch (franja) {
          case 'desayuno':
          this.desayunoLunes.push(new Alimento(franja));
          break;
          case 'postdesayuno':
          this.postDesayunoLunes.push(new Alimento(franja));
          break;
          case 'comida':
          this.comidaLunes.push(new Alimento(franja));
          break;
          case 'merienda':
          this.meriendaLunes.push(new Alimento(franja));
          break;
          case 'cena':
          this.cenaLunes.push(new Alimento(franja));
          break;
        }

        break;
      case 'Martes':
        switch (franja) {
          case 'desayuno':
          this.desayunoMartes.push(new Alimento(franja));
          break;
          case 'postdesayuno':
          this.postDesayunoMartes.push(new Alimento(franja));
          break;
          case 'comida':
          this.comidaMartes.push(new Alimento(franja));
          break;
          case 'merienda':
          this.meriendaMartes.push(new Alimento(franja));
          break;
          case 'cena':
          this.cenaMartes.push(new Alimento(franja));
          break;
      }
        break;
      case 'Miercoles':
        switch (franja) {
          case 'desayuno':
          this.desayunoMiercoles.push(new Alimento(franja));
          break;
          case 'postdesayuno':
          this.postDesayunoMiercoles.push(new Alimento(franja));
          break;
          case 'comida':
          this.comidaMiercoles.push(new Alimento(franja));
          break;
          case 'merienda':
          this.meriendaMiercoles.push(new Alimento(franja));
          break;
          case 'cena':
          this.cenaMiercoles.push(new Alimento(franja));
          break;
      }
        break;
      case 'Jueves':
        switch (franja) {
          case 'desayuno':
          this.desayunoJueves.push(new Alimento(franja));
          break;
          case 'postdesayuno':
          this.postDesayunoJueves.push(new Alimento(franja));
          break;
          case 'comida':
          this.comidaJueves.push(new Alimento(franja));
          break;
          case 'merienda':
          this.meriendaJueves.push(new Alimento(franja));
          break;
          case 'cena':
          this.cenaJueves.push(new Alimento(franja));
          break;
      }
        break;
      case 'Viernes':
        switch (franja) {
          case 'desayuno':
          this.desayunoViernes.push(new Alimento(franja));
          break;
          case 'postdesayuno':
          this.postDesayunoViernes.push(new Alimento(franja));
          break;
          case 'comida':
          this.comidaViernes.push(new Alimento(franja));
          break;
          case 'merienda':
          this.meriendaViernes.push(new Alimento(franja));
          break;
          case 'cena':
          this.cenaViernes.push(new Alimento(franja));
          break;
      }
        break;
      case 'Sabado':
        switch (franja) {
          case 'desayuno':
          this.desayunoSabado.push(new Alimento(franja));
          break;
          case 'postdesayuno':
          this.postDesayunoSabado.push(new Alimento(franja));
          break;
          case 'comida':
          this.comidaSabado.push(new Alimento(franja));
          break;
          case 'merienda':
          this.meriendaSabado.push(new Alimento(franja));
          break;
          case 'cena':
          this.cenaSabado.push(new Alimento(franja));
          break;
      }
        break;
      case 'Domingo':
        switch (franja) {
          case 'desayuno':
          this.desayunoDomingo.push(new Alimento(franja));
          break;
          case 'postdesayuno':
          this.postDesayunoDomingo.push(new Alimento(franja));
          break;
          case 'comida':
          this.comidaDomingo.push(new Alimento(franja));
          break;
          case 'merienda':
          this.meriendaDomingo.push(new Alimento(franja));
          break;
          case 'cena':
          this.cenaDomingo.push(new Alimento(franja));
          break;
      }
        break;

    }



  }


  guardarDieta() {

    this.desayunoLunes.forEach(element => {
      this.dieta.Lunes.push(element);
    });
    this.postDesayunoLunes.forEach(element => {
      this.dieta.Lunes.push(element);
    });
    this.comidaLunes.forEach(element => {
      this.dieta.Lunes.push(element);
    });
    this.meriendaLunes.forEach(element => {
      this.dieta.Lunes.push(element);
    });
    this.cenaLunes.forEach(element => {
      this.dieta.Lunes.push(element);
    });

    this.desayunoMartes.forEach(element => {
      this.dieta.Martes.push(element);
    });
    this.postDesayunoMartes.forEach(element => {
      this.dieta.Martes.push(element);
    });
    this.comidaMartes.forEach(element => {
      this.dieta.Martes.push(element);
    });
    this.meriendaMartes.forEach(element => {
      this.dieta.Martes.push(element);
    });
    this.cenaMartes.forEach(element => {
      this.dieta.Martes.push(element);
    });

    this.desayunoMiercoles.forEach(element => {
      this.dieta.Miercoles.push(element);
    });
    this.postDesayunoMiercoles.forEach(element => {
      this.dieta.Miercoles.push(element);
    });
    this.comidaMiercoles.forEach(element => {
      this.dieta.Miercoles.push(element);
    });
    this.meriendaMiercoles.forEach(element => {
      this.dieta.Miercoles.push(element);
    });
    this.cenaMiercoles.forEach(element => {
      this.dieta.Miercoles.push(element);
    });

    this.desayunoJueves.forEach(element => {
      this.dieta.Jueves.push(element);
    });
    this.postDesayunoJueves.forEach(element => {
      this.dieta.Jueves.push(element);
    });
    this.comidaJueves.forEach(element => {
      this.dieta.Jueves.push(element);
    });
    this.meriendaJueves.forEach(element => {
      this.dieta.Jueves.push(element);
    });
    this.cenaJueves.forEach(element => {
      this.dieta.Jueves.push(element);
    });

    this.desayunoViernes.forEach(element => {
      this.dieta.Viernes.push(element);
    });
    this.postDesayunoViernes.forEach(element => {
      this.dieta.Viernes.push(element);
    });
    this.comidaViernes.forEach(element => {
      this.dieta.Viernes.push(element);
    });
    this.meriendaViernes.forEach(element => {
      this.dieta.Viernes.push(element);
    });
    this.cenaViernes.forEach(element => {
      this.dieta.Viernes.push(element);
    });

    this.desayunoSabado.forEach(element => {
      this.dieta.Sabado.push(element);
    });
    this.postDesayunoSabado.forEach(element => {
      this.dieta.Sabado.push(element);
    });
    this.comidaSabado.forEach(element => {
      this.dieta.Sabado.push(element);
    });
    this.meriendaSabado.forEach(element => {
      this.dieta.Sabado.push(element);
    });
    this.cenaSabado.forEach(element => {
      this.dieta.Sabado.push(element);
    });


    this.desayunoDomingo.forEach(element => {
      this.dieta.Domingo.push(element);
    });
    this.postDesayunoDomingo.forEach(element => {
      this.dieta.Domingo.push(element);
    });
    this.comidaDomingo.forEach(element => {
      this.dieta.Domingo.push(element);
    });
    this.meriendaDomingo.forEach(element => {
      this.dieta.Domingo.push(element);
    });
    this.cenaDomingo.forEach(element => {
      this.dieta.Domingo.push(element);
    });


    console.log(this.dieta);

    this.daoService.guardarDieta(this.paciente, this.dieta).subscribe(
      R => {
        // window.location.reload();
      }
    );


  }

  ngOnInit() {

    this.paciente = JSON.parse(localStorage.getItem('Paciente'));

  }

}
