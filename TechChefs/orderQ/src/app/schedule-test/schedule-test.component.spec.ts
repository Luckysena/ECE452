import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTestComponent } from './schedule-test.component';

describe('ScheduleTestComponent', () => {
  let component: ScheduleTestComponent;
  let fixture: ComponentFixture<ScheduleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
