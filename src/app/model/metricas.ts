
import { Anatomia } from '../model/anatomia';
import { Paciente } from '../model/paciente';

export class Metricas {
    email: string;

    Imc: number;

    fechaModificacion: Date;
    activo: string;

    constructor(paciente: Paciente, medidas: Anatomia) {

        this.Imc = medidas.peso + 1;

    }

  }
