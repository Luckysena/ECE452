import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchorderComponent } from './searchorder.component';

describe('SearchorderComponent', () => {
  let component: SearchorderComponent;
  let fixture: ComponentFixture<SearchorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
