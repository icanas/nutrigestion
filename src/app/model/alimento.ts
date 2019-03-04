export class Alimento {

    id: number;
    nombre: string;
    calorias: number;
    franja: string;
    cantidad: number;

    constructor(franja: string) {
      this.franja = franja;
    }

  }
