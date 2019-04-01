
import { Anatomia } from '../model/anatomia';
import { Paciente } from '../model/paciente';

export class Metricas {
    email: string;

    Imc: number;
    RatioCinturaCadera: number;
    Suma6Pliegues: number;
    Suma8Pliegues: number;
    Somatotipo: string;
    PorcentGrasa: number;
    PorcentOsea: number;
    PorcentMuscular: number;
    PorcentResidual: number;
    MasaGrasa: number;
    MasaOsea: number;
    MasaMuscular: number;
    MasaResidual: number;

    fechaModificacion: Date;
    activo: string;

    constructor(paciente: Paciente, medidas: Anatomia) {

        //////////////////////////// Controlar las divisiones entre 0

        this.Imc = Number(medidas.peso) / ((Number(medidas.altura) / 100) ** 2);

        this.RatioCinturaCadera = (Number(medidas.PRcintura) / Number(medidas.PRcadera));

        this.Suma6Pliegues = (Number(medidas.PLabdominal) +
                            Number(medidas.PLmuslo) +
                            Number(medidas.PLpierna) +
                            Number(medidas.PLsubescapular) +
                            Number(medidas.PLsupraespinal) +
                            Number(medidas.PLtriceps));

        this.Suma8Pliegues = (Number(medidas.PLabdominal) +
                            Number(medidas.PLmuslo) +
                            Number(medidas.PLpierna) +
                            Number(medidas.PLsubescapular) +
                            Number(medidas.PLsupraespinal) +
                            Number(medidas.PLtriceps) +
                            Number(medidas.PLbiceps) +
                            Number(medidas.PLcrestaIliaca));


        // % Grasa
        if (paciente === undefined) {
            this.PorcentGrasa = 0;
        } else if (paciente.sexo === 'm') {
            this.PorcentGrasa = 0.1548 * (this.Suma6Pliegues) + 3.58;
        } else {
            this.PorcentGrasa = 0.1051 * (this.Suma6Pliegues) + 2.585;
        }

        // Masa Grasa
        this.MasaGrasa = (Number(medidas.peso) * this.PorcentGrasa) / 100;

        // Masa osea Kg
        this.MasaOsea = 3.02 *  ((Number(medidas.altura) / 100 ) ** 2) *
                                (Number(medidas.Dmuneca) / 100) *
                                (((Number(medidas.DbiepicondilarFemur) / 100) * 400 ) ** 0.712);

        // % Oseo
        this.PorcentOsea = (this.MasaOsea * 100) / Number(medidas.peso);

        // Masa Residual
        if (paciente === undefined) {
            this.MasaResidual = 0;
        } else if (paciente.sexo === 'm') {
            this.MasaResidual = Number(medidas.peso) * 0.209;
        } else {
            this.MasaResidual = Number(medidas.peso) * 0.241;
        }

        // % Residual
        this.PorcentResidual = (this.MasaResidual * 100) / Number(medidas.peso);

        // Masa Muscular
        this.MasaMuscular = Number(medidas.peso) - (this.MasaGrasa + this.MasaOsea + this.MasaResidual);

        // % Muscular
        this.PorcentMuscular = (this.MasaMuscular * 100) / Number(medidas.peso);
    }

  }
