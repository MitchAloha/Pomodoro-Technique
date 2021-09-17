import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerShortComponent } from './timer-short.component';

describe('TimerShortComponent', () => {
  let component: TimerShortComponent;
  let fixture: ComponentFixture<TimerShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
