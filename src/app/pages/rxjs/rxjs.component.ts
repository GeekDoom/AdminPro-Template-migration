import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  public subInterval: Subscription;

  constructor() {


    /* this.returnObservable().pipe(
      retry()
    ).subscribe({
      next: (value: any) => console.log('Subs:', value),
      error: (err: any) => console.warn('Error', err),
      complete: () => console.info('Observable terminated')
    }); */

    this.subInterval = this.returnInterval().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.subInterval.unsubscribe()
  }

  returnInterval(): Observable<number> {
    return interval(500)
      .pipe(
        map(value => value + 1),
        filter(value => (value % 2 === 0) ? true : false),
        //take(10),
      );
  }

  returnObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval)
          observer.complete();
        };
        if (i === 2) {
          console.log('i = 2 error')
          observer.error('i = 2')
        }
      }, 1000)
    });
  }

  ngOnInit(): void {
  }

}
