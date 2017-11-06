import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcComponent } from './jc.component';

describe('JcComponent', () => {
  let component: JcComponent;
  let fixture: ComponentFixture<JcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
