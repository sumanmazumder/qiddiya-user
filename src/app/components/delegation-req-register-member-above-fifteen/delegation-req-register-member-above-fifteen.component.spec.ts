import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationReqRegisterMemberAboveFifteenComponent } from './delegation-req-register-member-above-fifteen.component';

describe('DelegationReqRegisterMemberAboveFifteenComponent', () => {
  let component: DelegationReqRegisterMemberAboveFifteenComponent;
  let fixture: ComponentFixture<DelegationReqRegisterMemberAboveFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationReqRegisterMemberAboveFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationReqRegisterMemberAboveFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
