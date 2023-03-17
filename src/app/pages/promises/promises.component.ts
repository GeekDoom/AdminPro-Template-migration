import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
     const promise = new Promise((resolve, reject) => {

      if (false) {
        resolve('Hey world');
      } else {
        reject('Something went wrong');
      }
    });

    promise.then((msg) => {
      console.log(msg);
    })
      .catch(error => console.log('Error in my promise', error));

    console.log('End init')
  }

}
