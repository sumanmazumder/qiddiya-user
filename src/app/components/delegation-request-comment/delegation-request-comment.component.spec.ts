import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationRequestCommentComponent } from './delegation-request-comment.component';

describe('DelegationRequestCommentComponent', () => {
  let component: DelegationRequestCommentComponent;
  let fixture: ComponentFixture<DelegationRequestCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationRequestCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationRequestCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
