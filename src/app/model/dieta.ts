import { Alimento } from '../model/alimento';

export class Dieta {

    Lunes: Alimento[] = [];
    Martes: Alimento[] = [];
    Miercoles: Alimento[] = [];
    Jueves: Alimento[] = [];
    Viernes: Alimento[] = [];
    Sabado: Alimento[] = [];
    Domingo: Alimento[] = [];

  }


export class Dia {

    desayuno: number;
    postdesayuno: number;
    comida: number;
    merienda: number;
    cena: number;

  }
