import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfDelegatesComponent } from './number-of-delegates.component';

describe('NumberOfDelegatesComponent', () => {
  let component: NumberOfDelegatesComponent;
  let fixture: ComponentFixture<NumberOfDelegatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfDelegatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfDelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
