import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinThreshComponent } from './min-thresh.component';

describe('MinThreshComponent', () => {
  let component: MinThreshComponent;
  let fixture: ComponentFixture<MinThreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinThreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinThreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
