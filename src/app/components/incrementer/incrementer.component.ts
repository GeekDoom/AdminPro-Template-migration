import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.btnClass =`btn ${this.btnClass}`
  }

  @Input('value') progress: number = 40;
  @Input() btnClass: string = 'btn-primary'


  @Output('value') outValue: EventEmitter<number> = new EventEmitter();


  changeValue(value: number): any {

    if (this.progress >= 100 && value >= 0) {
      this.outValue.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && value < 0) {
      this.outValue.emit(0);
      return this.progress = 0;
    }


    this.progress = this.progress + value;
    this.outValue.emit(this.progress);
  }

  onChange(newValue: number) {

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0
    } else {
       this.progress = newValue
    }
     this.outValue.emit(this.progress);
  }

}
