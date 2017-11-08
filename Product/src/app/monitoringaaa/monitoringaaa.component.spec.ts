import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringaaaComponent } from './monitoringaaa.component';

describe('MonitoringaaaComponent', () => {
  let component: MonitoringaaaComponent;
  let fixture: ComponentFixture<MonitoringaaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringaaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
