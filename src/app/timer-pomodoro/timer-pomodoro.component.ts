import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CountdownComponent } from 'ngx-countdown';
import { AppService } from '../shared/app.service';
import { MessagingService } from '../shared/messaging.service';

@Component({
  selector: 'app-timer-pomodoro',
  templateUrl: './timer-pomodoro.component.html',
  styleUrls: ['./timer-pomodoro.component.scss']
})
export class TimerPomodoroComponent implements OnInit {
  @Input() taskExist: boolean;
  @Input() task: string;
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;


  config: any;
  timeData: string;
  disabled: boolean;
  working: boolean;
  s_break: boolean;
  l_break: boolean;
  started = false;
  message;

  constructor(private appService: AppService, private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.timeData = this.appService.getTimeData();
    this.config = {leftTime: this.timeData, format: 'mm:ss', demand:true};

    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

  onPomodoro() {
      this.countdown.begin();
      this.appService.setWorking(true);
      this.started = true;
      setTimeout(() => {
        this.appService.setWorking(false);
        this.appService.setCounter(1);
        var remainder = this.appService.getCounter() % 4;
        if (remainder === 0) {
          this.appService.setRound(true);
          this.appService.setLongBreak(true);

          this.appService.setTimeData("900");
        } else {
          this.appService.setShortBreak(true);
          this.appService.setTimeData("300");
        }
        this.messagingService.sendNotification();
      }, 1500000);
  }

  onPause() {
    this.countdown.pause();
  }

  onStop() {
    this.countdown.restart();
  }

}
