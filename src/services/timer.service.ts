import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timer: any = null;
  private elapsedSeconds = 0;

  private elapsedTimeSubject = new BehaviorSubject<string>('00:00');

  readonly elapsedTime$ = this.elapsedTimeSubject.asObservable();

  start(): void {

    this.stop();

    this.elapsedSeconds = 0;

    this.emitTime();

    this.timer = setInterval(() => {

      this.elapsedSeconds++;

      this.emitTime();

    }, 1000);

  }

  stop(): void {

    if (this.timer) {

      clearInterval(this.timer);

      this.timer = null;

    }

  }

  reset(): void {

    this.stop();

    this.elapsedSeconds = 0;

    this.emitTime();

  }

  getElapsedSeconds(): number {

    return this.elapsedSeconds;

  }

  private emitTime(): void {

    const hours = Math.floor(this.elapsedSeconds / 3600);

    const minutes = Math.floor((this.elapsedSeconds % 3600) / 60);

    const seconds = this.elapsedSeconds % 60;

    const value =
      (hours > 0
        ? hours.toString().padStart(2, '0') + ':'
        : '') +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');

    this.elapsedTimeSubject.next(value);

  }

}