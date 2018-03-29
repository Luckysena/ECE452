import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDashboardComponent } from './cust-dashboard.component';
import {MatDialog} from '@angular/material';


describe('CustDashboardComponent', () => {
  let component: CustDashboardComponent;
  let fixture: ComponentFixture<CustDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
