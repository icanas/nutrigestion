import { Component, OnInit } from '@angular/core';

import { Dieta, Dia } from '../model/dieta';
import { Alimento } from '../model/alimento';
import { Paciente } from '../model/paciente';
import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-dieta-visor-paciente',
  templateUrl: './dieta-visor-paciente.component.html',
  styleUrls: ['./dieta-visor-paciente.component.css']
})
export class DietaVisorPacienteComponent implements OnInit {

  constructor(
    private daoService: DaoService
  ) { }

  paciente: Paciente = new Paciente();
  conDieta: boolean;

  dietaSelecionada: any;
  dieta: Dieta = new Dieta();

  diaLunes: Dia = new Dia();
  diaMartes: Dia = new Dia();
  diaMiercoles: Dia = new Dia();
  diaJueves: Dia = new Dia();
  diaViernes: Dia = new Dia();
  diaSabado: Dia = new Dia();
  diaDomingo: Dia = new Dia();

  alimentoLunes: Alimento[] = [];
  alimentoMartes: Alimento[] = [];
  alimentoMiercoles: Alimento[] = [];
  alimentoJueves: Alimento[] = [];
  alimentoViernes: Alimento[] = [];
  alimentoSabado: Alimento[] = [];
  alimentoDomingo: Alimento[] = [];



  rellenaTabla() {

    this.daoService.getDia(this.dietaSelecionada.lunes).subscribe(
      R => {

        if (R != null) {
          this.diaLunes.desayuno = R[0].desayuno;

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('desayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoLunes.push(alimento); /////////////////////////
                });

            }


            }
          );

          this.diaLunes.postdesayuno = R[0].postdesayuno;

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('postdesayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoLunes.push(alimento);

                });
            }


            }
          );
          this.diaLunes.comida = R[0].comida;

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('comida');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoLunes.push(alimento);

                });

            }


            }
          );
          this.diaLunes.merienda = R[0].merienda;

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('merienda');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoLunes.push(alimento);

                });

            }


            }
          );
          this.diaLunes.cena = R[0].cena;

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('cena');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoLunes.push(alimento);


                });

            }


            }
          );


        }

    }
    );


    this.daoService.getDia(this.dietaSelecionada.martes).subscribe(
      R => {

        if (R != null) {
          this.diaMartes.desayuno = R[0].desayuno;

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('desayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMartes.push(alimento);

                });

            }


            }
          );

          this.diaMartes.postdesayuno = R[0].postdesayuno;

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('postdesayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMartes.push(alimento);

                });
            }


            }
          );
          this.diaMartes.comida = R[0].comida;

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('comida');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMartes.push(alimento);

                });

            }


            }
          );
          this.diaMartes.merienda = R[0].merienda;

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('merienda');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMartes.push(alimento);

                });

            }


            }
          );
          this.diaMartes.cena = R[0].cena;

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('cena');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMartes.push(alimento);

                });

            }


            }
          );


        }

    }
    );

    this.daoService.getDia(this.dietaSelecionada.miercoles).subscribe(
      R => {

        if (R != null) {
          this.diaMiercoles.desayuno = R[0].desayuno;

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('desayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMiercoles.push(alimento);

                });

            }


            }
          );

          this.diaMiercoles.postdesayuno = R[0].postdesayuno;

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('postdesayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMiercoles.push(alimento);

                });
            }


            }
          );
          this.diaMiercoles.comida = R[0].comida;

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('comida');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMiercoles.push(alimento);

                });

            }


            }
          );
          this.diaMiercoles.merienda = R[0].merienda;

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('merienda');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMiercoles.push(alimento);

                });

            }


            }
          );
          this.diaMiercoles.cena = R[0].cena;

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('cena');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoMiercoles.push(alimento);

                });

            }


            }
          );


        }

    }
    );

    this.daoService.getDia(this.dietaSelecionada.jueves).subscribe(
      R => {

        if (R != null) {
          this.diaJueves.desayuno = R[0].desayuno;

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('desayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoJueves.push(alimento);

                });

            }


            }
          );

          this.diaJueves.postdesayuno = R[0].postdesayuno;

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('postdesayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoJueves.push(alimento);

                });
            }


            }
          );
          this.diaJueves.comida = R[0].comida;

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('comida');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoJueves.push(alimento);

                });

            }


            }
          );
          this.diaJueves.merienda = R[0].merienda;

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('merienda');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoJueves.push(alimento);

                });

            }


            }
          );
          this.diaJueves.cena = R[0].cena;

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('cena');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoJueves.push(alimento);

                });

            }


            }
          );


        }
    }
    );

    this.daoService.getDia(this.dietaSelecionada.viernes).subscribe(
      R => {

        if (R != null) {
          this.diaViernes.desayuno = R[0].desayuno;

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('desayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoViernes.push(alimento);

                });

            }


            }
          );

          this.diaViernes.postdesayuno = R[0].postdesayuno;

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('postdesayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoViernes.push(alimento);

                });
            }


            }
          );
          this.diaViernes.comida = R[0].comida;

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('comida');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoViernes.push(alimento);

                });

            }


            }
          );
          this.diaViernes.merienda = R[0].merienda;

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('merienda');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoViernes.push(alimento);

                });

            }


            }
          );
          this.diaViernes.cena = R[0].cena;

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('cena');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoViernes.push(alimento);

                });

            }


            }
          );


        }
    }
    );

    this.daoService.getDia(this.dietaSelecionada.sabado).subscribe(
      R => {

        if (R != null) {
          this.diaSabado.desayuno = R[0].desayuno;

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('desayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoSabado.push(alimento);

                });

            }


            }
          );

          this.diaSabado.postdesayuno = R[0].postdesayuno;

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('postdesayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoSabado.push(alimento);

                });
            }


            }
          );
          this.diaSabado.comida = R[0].comida;

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('comida');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoSabado.push(alimento);

                });

            }


            }
          );
          this.diaSabado.merienda = R[0].merienda;

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('merienda');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoSabado.push(alimento);

                });

            }


            }
          );
          this.diaSabado.cena = R[0].cena;

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('cena');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoSabado.push(alimento);

                });

            }


            }
          );


        }
    }
    );

    this.daoService.getDia(this.dietaSelecionada.domingo).subscribe(
      R => {

        if (R != null) {
          this.diaDomingo.desayuno = R[0].desayuno;

          this.daoService.getComida(R[0].desayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('desayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoDomingo.push(alimento);

                });

            }


            }
          );

          this.diaDomingo.postdesayuno = R[0].postdesayuno;

          this.daoService.getComida(R[0].postdesayuno).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('postdesayuno');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoDomingo.push(alimento);

                });
            }


            }
          );
          this.diaDomingo.comida = R[0].comida;

          this.daoService.getComida(R[0].comida).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('comida');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoDomingo.push(alimento);

                });

            }


            }
          );
          this.diaDomingo.merienda = R[0].merienda;

          this.daoService.getComida(R[0].merienda).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('merienda');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoDomingo.push(alimento);

                });

            }


            }
          );
          this.diaDomingo.cena = R[0].cena;

          this.daoService.getComida(R[0].cena).subscribe(
            T => {

              if (T) {
                T.forEach(
                  element => {
                    const alimento = new Alimento('cena');
                    alimento.nombre = element.nombre;
                    alimento.cantidad = element.cantidad;
                    this.alimentoDomingo.push(alimento);

                });

            }


            }
          );


        }
    }


    );


  }

  consumido(alimento: Alimento, dia: string) {
    const today = new Date();
    today.getDate();
    today.setUTCDate(today.getUTCDate() + 4 - (today.getUTCDay() || 7));
    const  yearStart = new Date(Date.UTC(today.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(( ( (Number(today) - Number(yearStart)) / 86400000) + 1) / 7);
    console.log(weekNo);
  }

  ngOnInit() {


    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.daoService.getDietas(this.paciente).subscribe(
      R => {
        if (R != null) {
          if (Number(R[0].activo) === 1) {
            this.conDieta = true;
            this.dietaSelecionada = R[0];
            console.log(R);
            this.rellenaTabla();
          }
        }
      }
    );




  }

}
