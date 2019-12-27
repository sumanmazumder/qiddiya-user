import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationUrnComponent } from './delegation-urn.component';

describe('DelegationUrnComponent', () => {
  let component: DelegationUrnComponent;
  let fixture: ComponentFixture<DelegationUrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationUrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationUrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
