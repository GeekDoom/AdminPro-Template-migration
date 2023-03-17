import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {


    /* this.returnObservable().pipe(
      retry()
    ).subscribe({
      next: (value: any) => console.log('Subs:', value),
      error: (err: any) => console.warn('Error', err),
      complete: () => console.info('Observable terminated')
    }); */

    this.returnInterval().subscribe(console.log)
  }

  returnInterval(): Observable<number> {
    return interval(1000)
      .pipe(
        take(4),
        map(value => value + 1)
      )
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
