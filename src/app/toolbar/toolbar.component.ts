import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() disabled1: boolean;
  @Input() disabled2: boolean;
  @Input() disabled3: boolean;

  working: boolean;
  s_break: boolean;
  l_break: boolean;




  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.working = this.appService.getWorking();
    this.s_break = this.appService.getShortBreak();
    this.l_break = this.appService.getLongBreak();
  }

}
