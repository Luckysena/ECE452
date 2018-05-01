import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueGraphComponent } from './revenue-graph.component';

describe('RevenueGraphComponent', () => {
  let component: RevenueGraphComponent;
  let fixture: ComponentFixture<RevenueGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
