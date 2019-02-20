import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-principal-paciente',
  templateUrl: './principal-paciente.component.html',
  styleUrls: ['./principal-paciente.component.css']
})
export class PrincipalPacienteComponent implements OnInit {

  constructor(
    private daoService: DaoService,
  ) { }

  paciente: Paciente = new Paciente();
  private autorizado = false;



  getPaciente() {
    const token = sessionStorage.getItem('token');
    this.daoService.getPaciente(token).subscribe(
      R => {
      if (!R) {  // Fracaso
        this.autorizado = false;
      } else {  // Exito
        this.autorizado = true;
        this.paciente.nombre = R.nombre;
        this.paciente.email = R.email;
        this.paciente.emailProfesional = R.emailProfesional;
      }
    });
  }



  ngOnInit() {
    this.getPaciente();
  }

}
