import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroprofesionalComponent } from './registroprofesional.component';

describe('RegistroprofesionalComponent', () => {
  let component: RegistroprofesionalComponent;
  let fixture: ComponentFixture<RegistroprofesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroprofesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroprofesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
