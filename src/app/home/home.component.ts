import { Component, OnInit, DoCheck } from '@angular/core';
import { AppService } from '../shared/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  working: boolean;
  s_break: boolean;
  l_break: boolean;
  message;

  constructor(private appService: AppService) { }


  ngOnInit() {
    this.working = this.appService.getWorking();
    this.s_break = this.appService.getShortBreak();
    this.l_break = this.appService.getLongBreak();
  }

  ngDoCheck() {
    this.working = this.appService.getWorking();
    this.s_break = this.appService.getShortBreak();
    this.l_break = this.appService.getLongBreak();
  }
}
