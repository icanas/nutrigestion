import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaVisorPacienteComponent } from './dieta-visor-paciente.component';

describe('DietaVisorPacienteComponent', () => {
  let component: DietaVisorPacienteComponent;
  let fixture: ComponentFixture<DietaVisorPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaVisorPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaVisorPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
