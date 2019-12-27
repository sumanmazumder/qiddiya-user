import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationReqRegisterMemberUnderFifteenComponent } from './delegation-req-register-member-under-fifteen.component';

describe('DelegationReqRegisterMemberUnderFifteenComponent', () => {
  let component: DelegationReqRegisterMemberUnderFifteenComponent;
  let fixture: ComponentFixture<DelegationReqRegisterMemberUnderFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationReqRegisterMemberUnderFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationReqRegisterMemberUnderFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
