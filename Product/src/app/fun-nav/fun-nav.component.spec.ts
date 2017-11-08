import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunNavComponent } from './fun-nav.component';

describe('FunNavComponent', () => {
  let component: FunNavComponent;
  let fixture: ComponentFixture<FunNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
