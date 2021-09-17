import { Component, OnInit, DoCheck } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {


  starting: boolean;
  working: boolean;
  s_break: boolean;
  l_break: boolean;

  counter: number;
  round: boolean;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.working = this.appService.getWorking();
    this.s_break = this.appService.getShortBreak();
    this.l_break = this.appService.getLongBreak();

    this.round = false;
  }

  ngDoCheck() {
    this.working = this.appService.getWorking();
    this.s_break = this.appService.getShortBreak();
    this.l_break = this.appService.getLongBreak();
  }
}
