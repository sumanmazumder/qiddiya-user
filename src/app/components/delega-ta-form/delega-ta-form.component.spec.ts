import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegaTaFormComponent } from './delega-ta-form.component';

describe('DelegaTaFormComponent', () => {
  let component: DelegaTaFormComponent;
  let fixture: ComponentFixture<DelegaTaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegaTaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegaTaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
