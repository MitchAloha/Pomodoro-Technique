import { Component, OnInit, ViewChild} from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { AppService } from '../shared/app.service';
import { MessagingService } from '../shared/messaging.service';

@Component({
  selector: 'app-timer-long',
  templateUrl: './timer-long.component.html',
  styleUrls: ['./timer-long.component.scss']
})
export class TimerLongComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;


  config: any;
  timeData: string;
  counter: number;
  round: boolean;
  working: boolean;
  s_break: boolean;
  l_break: boolean;
  disabled = false;
  message;

  constructor(private appService: AppService, private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.config = {leftTime: this.appService.getTimeData(), format: 'mm:ss', demand:true};

    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

  onLong() {
    this.countdown.begin();
    this.appService.setLongBreak(true);
    this.disabled = true;
    setTimeout(() => {
      this.appService.setWorking(true);
      this.appService.setLongBreak(false);
      this.round = false;
      this.appService.setTimeData("1500");
      this.messagingService.sendNotification();
    }, 900000);
  }

}
