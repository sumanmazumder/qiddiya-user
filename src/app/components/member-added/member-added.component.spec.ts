import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddedComponent } from './member-added.component';

describe('MemberAddedComponent', () => {
  let component: MemberAddedComponent;
  let fixture: ComponentFixture<MemberAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
