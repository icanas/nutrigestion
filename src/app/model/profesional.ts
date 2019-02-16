import { Paciente } from './paciente';

export class Profesional {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    pacientes: Paciente[];
    token: string;
  }
