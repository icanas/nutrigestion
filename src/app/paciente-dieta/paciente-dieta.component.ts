import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Paciente } from '../model/paciente';
import { Profesional } from '../model/profesional';
import { Alimento } from '../model/alimento';
import { Dieta, Dia } from '../model/dieta';

import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-paciente-dieta',
  templateUrl: './paciente-dieta.component.html',
  styleUrls: ['./paciente-dieta.component.css']
})
export class PacienteDietaComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private route: Router
  ) { }

  isOpenLunes = true;
  isOpenAccordion = false;

  profesional: Profesional = new Profesional();
  paciente: Paciente = new Paciente();
  dieta: Dieta = new Dieta();
  dietas: Dieta[] = [];

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

  menos(dia: string, franja: string) {

    switch (dia) {
      case 'Lunes':

        switch (franja) {
          case 'desayuno':
          this.desayunoLunes.pop();
          break;
          case 'postdesayuno':
          this.postDesayunoLunes.pop();
          break;
          case 'comida':
          this.comidaLunes.pop();
          break;
          case 'merienda':
          this.meriendaLunes.pop();
          break;
          case 'cena':
          this.cenaLunes.pop();
          break;
        }

        break;
      case 'Martes':
        switch (franja) {
          case 'desayuno':
          this.desayunoMartes.pop();
          break;
          case 'postdesayuno':
          this.postDesayunoMartes.pop();
          break;
          case 'comida':
          this.comidaMartes.pop();
          break;
          case 'merienda':
          this.meriendaMartes.pop();
          break;
          case 'cena':
          this.cenaMartes.pop();
          break;
      }
        break;
      case 'Miercoles':
        switch (franja) {
          case 'desayuno':
          this.desayunoMiercoles.pop();
          break;
          case 'postdesayuno':
          this.postDesayunoMiercoles.pop();
          break;
          case 'comida':
          this.comidaMiercoles.pop();
          break;
          case 'merienda':
          this.meriendaMiercoles.pop();
          break;
          case 'cena':
          this.cenaMiercoles.pop();
          break;
      }
        break;
      case 'Jueves':
        switch (franja) {
          case 'desayuno':
          this.desayunoJueves.pop();
          break;
          case 'postdesayuno':
          this.postDesayunoJueves.pop();
          break;
          case 'comida':
          this.comidaJueves.pop();
          break;
          case 'merienda':
          this.meriendaJueves.pop();
          break;
          case 'cena':
          this.cenaJueves.pop();
          break;
      }
        break;
      case 'Viernes':
        switch (franja) {
          case 'desayuno':
          this.desayunoViernes.pop();
          break;
          case 'postdesayuno':
          this.postDesayunoViernes.pop();
          break;
          case 'comida':
          this.comidaViernes.pop();
          break;
          case 'merienda':
          this.meriendaViernes.pop();
          break;
          case 'cena':
          this.cenaViernes.pop();
          break;
      }
        break;
      case 'Sabado':
        switch (franja) {
          case 'desayuno':
          this.desayunoSabado.pop();
          break;
          case 'postdesayuno':
          this.postDesayunoSabado.pop();
          break;
          case 'comida':
          this.comidaSabado.pop();
          break;
          case 'merienda':
          this.meriendaSabado.pop();
          break;
          case 'cena':
          this.cenaSabado.pop();
          break;
      }
        break;
      case 'Domingo':
        switch (franja) {
          case 'desayuno':
          this.desayunoDomingo.pop();
          break;
          case 'postdesayuno':
          this.postDesayunoDomingo.pop();
          break;
          case 'comida':
          this.comidaDomingo.pop();
          break;
          case 'merienda':
          this.meriendaDomingo.pop();
          break;
          case 'cena':
          this.cenaDomingo.pop();
          break;
      }
        break;

    }



  }


  guardarDieta() {


    this.desayunoLunes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.lunes.push(element);
    });
    this.postDesayunoLunes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.lunes.push(element);
    });
    this.comidaLunes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.lunes.push(element);
    });
    this.meriendaLunes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.lunes.push(element);
    });
    this.cenaLunes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.lunes.push(element);
    });

    this.desayunoMartes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.martes.push(element);
    });
    this.postDesayunoMartes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.martes.push(element);
    });
    this.comidaMartes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.martes.push(element);
    });
    this.meriendaMartes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.martes.push(element);
    });
    this.cenaMartes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.martes.push(element);
    });

    this.desayunoMiercoles.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.miercoles.push(element);
    });
    this.postDesayunoMiercoles.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.miercoles.push(element);
    });
    this.comidaMiercoles.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.miercoles.push(element);
    });
    this.meriendaMiercoles.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.miercoles.push(element);
    });
    this.cenaMiercoles.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.miercoles.push(element);
    });

    this.desayunoJueves.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.jueves.push(element);
    });
    this.postDesayunoJueves.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.jueves.push(element);
    });
    this.comidaJueves.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.jueves.push(element);
    });
    this.meriendaJueves.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.jueves.push(element);
    });
    this.cenaJueves.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.jueves.push(element);
    });

    this.desayunoViernes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.viernes.push(element);
    });
    this.postDesayunoViernes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.viernes.push(element);
    });
    this.comidaViernes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.viernes.push(element);
    });
    this.meriendaViernes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.viernes.push(element);
    });
    this.cenaViernes.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.viernes.push(element);
    });

    this.desayunoSabado.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.sabado.push(element);
    });
    this.postDesayunoSabado.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.sabado.push(element);
    });
    this.comidaSabado.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.sabado.push(element);
    });
    this.meriendaSabado.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.sabado.push(element);
    });
    this.cenaSabado.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.sabado.push(element);
    });


    this.desayunoDomingo.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.domingo.push(element);
    });
    this.postDesayunoDomingo.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.domingo.push(element);
    });
    this.comidaDomingo.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.domingo.push(element);
    });
    this.meriendaDomingo.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.domingo.push(element);
    });
    this.cenaDomingo.forEach(element => {
      element.nombre = element.nombre.toLowerCase();
      this.dieta.domingo.push(element);
    });

    if (this.dieta.nombre != null) {
      this.dieta.nombre = this.dieta.nombre;
    } else {
      this.dieta.nombre = ' ' ;
    }

    this.daoService.guardarDieta(this.paciente, this.dieta).subscribe(
      R => {
       window.location.reload();
      }
    );


  }

  getDietasProfesional() {
    const p = new Paciente();
    p.email = this.profesional.email;
    this.daoService.getDietas(p).subscribe(
      R => {
        this.dietas = R;
      }
    );
  }

  editarDieta($dieta: Dieta) { // me viene la dieta desde diestas-list

    this.dieta = new Dieta();
    this.daoService.getDia(Number($dieta.lunes)).subscribe(
      R => {

        if (R != null) {

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'desayuno';
                    this.desayunoLunes.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'postdesayuno';
                    this.postDesayunoLunes.push(element);
                });
            }


            }
          );

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'comida';
                    this.comidaLunes.push(element);
                });
            }

            }
          );

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'merienda';
                    this.meriendaLunes.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'cena';
                    this.cenaLunes.push(element);
                });
            }


            }
          );


        }

      }
    );

    this.daoService.getDia(Number($dieta.martes)).subscribe(
      R => {

        if (R != null) {

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'desayuno';
                    this.desayunoMartes.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'postdesayuno';
                    this.postDesayunoMartes.push(element);
                });
            }


            }
          );

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'comida';
                    this.comidaMartes.push(element);
                });
            }

            }
          );

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'merienda';
                    this.meriendaMartes.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'cena';
                    this.cenaMartes.push(element);
                });
            }


            }
          );


        }

      }
    );

    this.daoService.getDia(Number($dieta.miercoles)).subscribe(
      R => {

        if (R != null) {

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'desayuno';
                    this.desayunoMiercoles.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'postdesayuno';
                    this.postDesayunoMiercoles.push(element);
                });
            }


            }
          );

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'comida';
                    this.comidaMiercoles.push(element);
                });
            }

            }
          );

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'merienda';
                    this.meriendaMiercoles.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'cena';
                    this.cenaMiercoles.push(element);
                });
            }


            }
          );


        }

      }
    );

    this.daoService.getDia(Number($dieta.jueves)).subscribe(
      R => {

        if (R != null) {

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'desayuno';
                    this.desayunoJueves.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'postdesayuno';
                    this.postDesayunoJueves.push(element);
                });
            }


            }
          );

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'comida';
                    this.comidaJueves.push(element);
                });
            }

            }
          );

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'merienda';
                    this.meriendaJueves.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'cena';
                    this.cenaJueves.push(element);
                });
            }


            }
          );


        }

      }
    );

    this.daoService.getDia(Number($dieta.viernes)).subscribe(
      R => {

        if (R != null) {

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'desayuno';
                    this.desayunoViernes.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'postdesayuno';
                    this.postDesayunoViernes.push(element);
                });
            }


            }
          );

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'comida';
                    this.comidaViernes.push(element);
                });
            }

            }
          );

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'merienda';
                    this.meriendaViernes.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'cena';
                    this.cenaViernes.push(element);
                });
            }


            }
          );


        }

      }
    );

    this.daoService.getDia(Number($dieta.sabado)).subscribe(
      R => {

        if (R != null) {

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'desayuno';
                    this.desayunoSabado.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'postdesayuno';
                    this.postDesayunoSabado.push(element);
                });
            }


            }
          );

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'comida';
                    this.comidaSabado.push(element);
                });
            }

            }
          );

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'merienda';
                    this.meriendaSabado.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'cena';
                    this.cenaSabado.push(element);
                });
            }


            }
          );


        }

      }
    );

    this.daoService.getDia(Number($dieta.domingo)).subscribe(
      R => {

        if (R != null) {

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'desayuno';
                    this.desayunoDomingo.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'postdesayuno';
                    this.postDesayunoDomingo.push(element);
                });
            }


            }
          );

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'comida';
                    this.comidaDomingo.push(element);
                });
            }

            }
          );

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'merienda';
                    this.meriendaDomingo.push(element);
                });

            }


            }
          );

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    element.franja = 'cena';
                    this.cenaDomingo.push(element);
                });
            }


            }
          );


        }

      }
    );


    this.isOpenAccordion = true;  // Abro todos los acordeones para mostrar que se han llenado


  }

  onChange($dieta: Dieta) {
    this.editarDieta($dieta);
  }

  onKeyUp(alimento: Alimento ) {

    this.daoService.getAlimento(alimento.nombre).subscribe(
      R => {

        if (R) {
          alimento.unidades = R.unidades;
          alimento.id = R.id;
        } else {
          alimento.id = undefined;
        }

      }
    );

  }

  expandCollapse() {
    if (this.isOpenAccordion) {
      this.isOpenAccordion = false;
      this.isOpenLunes = false;
    } else {
      this.isOpenAccordion = true;
      this.isOpenLunes = true;
    }
  }

  checkNumber($event) {
    let caracter;
    caracter = $event.keyCode;

    if (caracter === 188 || caracter === 110) {
      $event.target.value = $event.target.value + '.';
    }

    return ((caracter > 47 && caracter < 58) || (caracter >= 96 && caracter <= 105) ||
    caracter === 190 || caracter === 37 ||
    caracter === 39 || caracter === 9 || caracter === 8) || caracter === 38 || caracter === 40;


  }

  home() {
    this.route.navigate(['principal']);
  }


  ngOnInit() {

    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.profesional = JSON.parse(localStorage.getItem('profesionalData'));
    this.getDietasProfesional();

  }

}
