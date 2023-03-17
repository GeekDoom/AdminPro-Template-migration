import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard-home', url: '/' },
        { title: 'Graph', url: 'graph1' },
        { title: 'Progress', url: 'progress' },
        { title: 'Promises', url: 'promises' },
        { title: 'RxJs', url: 'rxjs' },
      ]
    }
  ];

  constructor() { }
}
