
import { Anatomia } from '../model/anatomia';
import { Paciente } from '../model/paciente';

export class Metricas {
    email: string;

    Imc: number;
    IndiceCinturaCadera: number;
    IndicePonderal: number;
    RatioMunecaAltura: number;
    RatioMunecaCadera: number;
    Somatotipo: string;
    MasaGrasa: number;
    MasaOsea: number;
    MasaMuscular: number;
    MasaResidual: number;

    fechaModificacion: Date;
    activo: string;

    constructor(paciente: Paciente, medidas: Anatomia) {

        //////////////////////////// Controlar las divisiones entre 0

        this.Imc = Number(medidas.peso) / ((Number(medidas.altura) / 100) ** 2);

        this.IndiceCinturaCadera = (Number(medidas.PRcintura) / Number(medidas.PRcadera)) / 100;

        this.IndicePonderal = Number(medidas.peso) / ((Number(medidas.altura) / 100) ** 3);

        this.RatioMunecaAltura = Number(medidas.PRmuneca / Number(medidas.altura));

        this.RatioMunecaCadera = Number(medidas.PRmuneca / Number(medidas.PRcadera));

        // tslint:disable-next-line:max-line-length
        this.MasaOsea = 3.02 * ( (Number(medidas.altura)) ** 2 * ((Number(medidas.PRmuneca)) / 0.031415926) * (Number(medidas.Dfemur) / 100 ) * 400) ** 0.712;

        if (paciente === undefined) {
            this.MasaResidual = 0;
        } else if (paciente.sexo === 'm') {
            this.MasaResidual = Number(medidas.peso) * 0.209;
        } else {
            this.MasaResidual = Number(medidas.peso) * 0.241;
        }
        this.MasaGrasa = 1 ;        //////// Cambiar

        this.MasaMuscular = Number(medidas.peso) - (this.MasaGrasa + this.MasaOsea + this.MasaResidual);
    }

  }
