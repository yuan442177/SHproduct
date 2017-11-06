import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtyhComponent } from './xtyh.component';

describe('XtyhComponent', () => {
  let component: XtyhComponent;
  let fixture: ComponentFixture<XtyhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtyhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtyhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
