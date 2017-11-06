import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlphComponent } from './nlph.component';

describe('NlphComponent', () => {
  let component: NlphComponent;
  let fixture: ComponentFixture<NlphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
