import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLongComponent } from './timer-long.component';

describe('TimerLongComponent', () => {
  let component: TimerLongComponent;
  let fixture: ComponentFixture<TimerLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
