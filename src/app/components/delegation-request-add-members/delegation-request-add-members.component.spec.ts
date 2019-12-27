import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationRequestAddMembersComponent } from './delegation-request-add-members.component';

describe('DelegationRequestAddMembersComponent', () => {
  let component: DelegationRequestAddMembersComponent;
  let fixture: ComponentFixture<DelegationRequestAddMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationRequestAddMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationRequestAddMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
