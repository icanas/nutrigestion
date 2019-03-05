import { Component, OnInit } from '@angular/core';

import { Dieta, Dia } from '../model/dieta';
import { Alimento } from '../model/alimento';
import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-dieta-visor',
  templateUrl: './dieta-visor.component.html',
  styleUrls: ['./dieta-visor.component.css']
})
export class DietaVisorComponent implements OnInit {

  constructor(
    private daoService: DaoService
  ) { }

  dietaSelecionada: any;
  dieta: Dieta = new Dieta();

  diaLunes: Dia = new Dia();
  diaMartes: Dia = new Dia();
  diaMiercoles: Dia = new Dia();
  diaJueves: Dia = new Dia();
  diaViernes: Dia = new Dia();
  diaSabado: Dia = new Dia();
  diaDomingo: Dia = new Dia();





  // trabajar con alimentos, añadir aqui los alimentos de todos los dias

  ngOnInit() {

    this.dietaSelecionada = JSON.parse(localStorage.getItem('dieta'));


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
                    this.dieta.Lunes.push(alimento); /////////////////////////

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
                    this.dieta.Lunes.push(alimento);

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
                    this.dieta.Lunes.push(alimento);

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
                    this.dieta.Lunes.push(alimento);

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
                    this.dieta.Lunes.push(alimento);

                });

            }


            }
          );


        }
        console.log(this.dieta);
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
                    this.dieta.Martes.push(alimento); /////////////////////////

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
                    this.dieta.Martes.push(alimento);

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
                    this.dieta.Martes.push(alimento);

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
                    this.dieta.Martes.push(alimento);

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
                    this.dieta.Martes.push(alimento);

                });

            }


            }
          );


        }
        console.log(this.dieta);
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
                    this.dieta.Miercoles.push(alimento); /////////////////////////

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
                    this.dieta.Miercoles.push(alimento);

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
                    this.dieta.Miercoles.push(alimento);

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
                    this.dieta.Miercoles.push(alimento);

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
                    this.dieta.Miercoles.push(alimento);

                });

            }


            }
          );


        }
        console.log(this.dieta);
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
                    this.dieta.Jueves.push(alimento); /////////////////////////

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
                    this.dieta.Jueves.push(alimento);

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
                    this.dieta.Jueves.push(alimento);

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
                    this.dieta.Jueves.push(alimento);

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
                    this.dieta.Jueves.push(alimento);

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
                    this.dieta.Viernes.push(alimento); /////////////////////////

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
                    this.dieta.Viernes.push(alimento);

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
                    this.dieta.Viernes.push(alimento);

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
                    this.dieta.Viernes.push(alimento);

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
                    this.dieta.Viernes.push(alimento);

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
                    this.dieta.Sabado.push(alimento); /////////////////////////

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
                    this.dieta.Sabado.push(alimento);

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
                    this.dieta.Sabado.push(alimento);

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
                    this.dieta.Sabado.push(alimento);

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
                    this.dieta.Sabado.push(alimento);

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
                    this.dieta.Domingo.push(alimento); /////////////////////////

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
                    this.dieta.Domingo.push(alimento);

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
                    this.dieta.Domingo.push(alimento);

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
                    this.dieta.Domingo.push(alimento);

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
                    this.dieta.Domingo.push(alimento);

                });

            }


            }
          );


        }
    }


    );

    console.log(this.dieta);

  }

}


