import { Cita } from '../model/cita';
import { Anatomia } from '../model/anatomia';
import { Patologia } from '../model/patologia';

export class Paciente {
    id: number;
    nombre: string;
    apellido: string;
    apellido2: string;
    edad: number;
    sexo: string;
    email: string;
    password: string;
    emailProfesional: string;
    activo: string;
    citas: Cita[];
    anatomia: Anatomia;
    patologias: Patologia[];

  }
