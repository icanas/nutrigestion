import { Alimento } from '../model/alimento';

export class Dieta {

    Lunes: Alimento[] = [];
    Martes: Alimento[] = [];
    Miercoles: Alimento[] = [];
    Jueves: Alimento[] = [];
    Viernes: Alimento[] = [];
    Sabado: Alimento[] = [];
    Domingo: Alimento[] = [];
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
