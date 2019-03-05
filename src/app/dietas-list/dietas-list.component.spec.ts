import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasListComponent } from './dietas-list.component';

describe('DietasListComponent', () => {
  let component: DietasListComponent;
  let fixture: ComponentFixture<DietasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
