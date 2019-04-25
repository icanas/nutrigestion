import { Alimento } from '../model/alimento';

export class Dieta {

    lunes: Alimento[] = [];
    martes: Alimento[] = [];
    miercoles: Alimento[] = [];
    jueves: Alimento[] = [];
    viernes: Alimento[] = [];
    sabado: Alimento[] = [];
    domingo: Alimento[] = [];
    activo: boolean;
    nombre: string;
    fecha: string;

  }


export class Dia {

    desayuno: number;
    postdesayuno: number;
    comida: number;
    merienda: number;
    cena: number;

  }
