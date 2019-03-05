import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaVisorComponent } from './dieta-visor.component';

describe('DietaVisorComponent', () => {
  let component: DietaVisorComponent;
  let fixture: ComponentFixture<DietaVisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaVisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
