import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    working: boolean;
    s_break: boolean;
    l_break: boolean;
    counter: number;
    round: boolean;
    timeData: string;

    constructor(){
      this.working = true;
      this.s_break = false;
      this.l_break = false;
      this.counter = 0;
      this.round = false;
      this.timeData = "1500";
    }

    setWorking(work: boolean){
      this.working = work;
    }
    setShortBreak(short: boolean){
      this.s_break = short;
    }
    setLongBreak(long: boolean){
      this.l_break = long;
    }
    setCounter(c: number){
      this.counter += c;
    }
    setRound(r: boolean) {
      this.round = r;
    }
    setTimeData(t: string) {
      this.timeData = t;
    }

    getWorking(){
      return this.working;
    }
    getShortBreak(){
      return this.s_break;
    }
    getLongBreak(){
      return this.l_break;
    }
    getCounter(){
      return this.counter;
    }
    getRound() {
      return this.round;
    }
    getTimeData() {
      return this.timeData;
    }


}
