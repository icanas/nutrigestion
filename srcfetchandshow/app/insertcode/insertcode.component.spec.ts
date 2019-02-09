import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcodeComponent } from './insertcode.component';

describe('InsertcodeComponent', () => {
  let component: InsertcodeComponent;
  let fixture: ComponentFixture<InsertcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
