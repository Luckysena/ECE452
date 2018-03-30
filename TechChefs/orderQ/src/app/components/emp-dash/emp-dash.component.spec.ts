import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDashComponent } from './emp-dash.component';

describe('EmpDashComponent', () => {
  let component: EmpDashComponent;
  let fixture: ComponentFixture<EmpDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
