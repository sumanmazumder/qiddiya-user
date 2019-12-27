import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDelegateComponent } from './lead-delegate.component';

describe('LeadDelegateComponent', () => {
  let component: LeadDelegateComponent;
  let fixture: ComponentFixture<LeadDelegateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadDelegateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
