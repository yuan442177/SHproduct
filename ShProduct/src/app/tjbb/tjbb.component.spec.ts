import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjbbComponent } from './tjbb.component';

describe('TjbbComponent', () => {
  let component: TjbbComponent;
  let fixture: ComponentFixture<TjbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
