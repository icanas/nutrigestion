export class Alimento {

    id: number;
    nombre: string;
    calorias: number;
    franja: string;
    cantidad: number;
    unidades: string;

    constructor(franja: string) {
      this.franja = franja;
      this.cantidad = 0;
      this.unidades = 'gramos';
    }

  }
