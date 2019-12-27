import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationRequestPreferredTimesComponent } from './delegation-request-preferred-times.component';

describe('DelegationRequestPreferredTimesComponent', () => {
  let component: DelegationRequestPreferredTimesComponent;
  let fixture: ComponentFixture<DelegationRequestPreferredTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationRequestPreferredTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationRequestPreferredTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
