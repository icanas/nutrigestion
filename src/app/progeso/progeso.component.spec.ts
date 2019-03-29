import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgesoComponent } from './progeso.component';

describe('ProgesoComponent', () => {
  let component: ProgesoComponent;
  let fixture: ComponentFixture<ProgesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
