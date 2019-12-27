import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationTypeComponent } from './delegation-type.component';

describe('DelegationTypeComponent', () => {
  let component: DelegationTypeComponent;
  let fixture: ComponentFixture<DelegationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
