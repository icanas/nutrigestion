import { Cita } from '../model/cita';

export class Paciente {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    emailProfesional: string;
    activo: string;
    citas: Cita[];

  }
