
import { Anatomia } from '../model/anatomia';
import { Paciente } from '../model/paciente';

export class Metricas {
    email: string;

    Imc: number;
    RatioCinturaCadera: number;
    Suma6Pliegues: number;
    Suma8Pliegues: number;
    PorcentGrasa: number;
    PorcentOsea: number;
    PorcentMuscular: number;
    PorcentResidual: number;
    MasaGrasa: number;
    MasaOsea: number;
    MasaMuscular: number;
    MasaResidual: number;

    Somatotipo: string;
    Endomorfo: number;
    Mesomorfo: number;
    Ectomorfo: number;

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


        ///////////////// Somatotipo /////////////////

        const somatotipoArray: number[] = [];

        // Endomorfia
        const sumaPliegues = Number(medidas.PLtriceps) + Number(medidas.PLsubescapular) + Number(medidas.PLsupraespinal);
        const ratio = (170.18) / (Number(medidas.altura) / 100);    // Revisar si metros o cm la altura
        this.Endomorfo = (-0.7182 + (0.1451 * (sumaPliegues * ratio))
                        - 0.00068 * (sumaPliegues * ratio) ** 2)
                        + 0.000004 * ((sumaPliegues * ratio) ** 3);
        somatotipoArray.push(this.Endomorfo);

        // Mesomorfia
        this.Mesomorfo = (
                        (0.858 *  Number(medidas.Dhumero))
                        + (0.601 *  Number(medidas.DbiepicondilarFemur))
                        + (0.188 * ( Number(medidas.PRbrazoFlexionado - ( Number(medidas.PLtriceps) / 10 ))))
                        + (0.161 * ( Number(medidas.PRpierna) - ( Number(medidas.PLpierna) / 10)))
                        - (0.131 *  Number(medidas.altura))
                        + 4.5);
        somatotipoArray.push(this.Mesomorfo);

        // Ectomorfia
        const IP = Number(medidas.altura) / (Number(medidas.peso) ** (1 / 3));

        if (IP >= 40.75) {
            this.Ectomorfo = 0.732 * IP - 28.58;
        } else if (IP >= 38.25 && IP < 40.75) {
            this.Ectomorfo = 0.463 * IP - 17.63;
        } else if (IP < 38.25) {
            this.Ectomorfo = 0.1;
        } else {
            this.Ectomorfo = 0;
        }

        somatotipoArray.push(this.Ectomorfo);

        // Somatotipo
        let pos = 0;
        let indexMax = 0;
        let max = somatotipoArray[0];

        for (pos; pos < somatotipoArray.length; pos++) {
            if (somatotipoArray[pos] > max) {
                indexMax = pos;
                max = somatotipoArray[pos];
            }
          }

        switch (indexMax) {
            case 0:
                this.Somatotipo = 'Endomorfo';
                break;
            case 0:
                this.Somatotipo = 'Mesomorfo';
                break;
            case 0:
                this.Somatotipo = 'Ectomorfo';
                break;
        }


    }

  }
