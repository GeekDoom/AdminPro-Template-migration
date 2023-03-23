import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title!: string;
  public titleSub$!: Subscription;


  constructor(private router: Router) {

    this.titleSub$ = this.breadRouter()
      .subscribe(({ title }) => {
        this.title = title;
        document.title = `AdminPro - ${title}`;
      })
  }
  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

  breadRouter() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: any) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

  ngOnInit(): void {
  }

}
