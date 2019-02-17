import { Component, OnInit } from '@angular/core';


import { Paciente } from '../model/paciente';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

  constructor(
    private messenger: MessengerService,
  ) { }

  
  paciente: Paciente;
  fecha: Date;



  ngOnInit() {
    this.paciente = this.messenger.getPaciente();

  }

}
