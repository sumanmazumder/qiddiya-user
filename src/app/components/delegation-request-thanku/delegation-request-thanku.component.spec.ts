import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationRequestThankuComponent } from './delegation-request-thanku.component';

describe('DelegationRequestThankuComponent', () => {
  let component: DelegationRequestThankuComponent;
  let fixture: ComponentFixture<DelegationRequestThankuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationRequestThankuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationRequestThankuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
