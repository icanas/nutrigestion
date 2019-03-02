import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteDietaComponent } from './paciente-dieta.component';

describe('PacienteDietaComponent', () => {
  let component: PacienteDietaComponent;
  let fixture: ComponentFixture<PacienteDietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteDietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
