import { Component, OnInit } from '@angular/core';
import { ChartData, Color, Colors } from 'chart.js';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public labels1: string[] = ['Sales', 'Internet Sales', 'Mail-Order Sales'];
  public data1 = [10, 15, 40];

  public labels2: string[] = ['Candy', 'Soda', 'Pizza'];
  public data2 = [20, 20, 20];

  public labels3: string[] = ['Tech', 'Pieces', 'Consumables'];
  public data3 = [50, 30, 10];

  public labels4: string[] = ['In-store', 'Internet', 'Mail'];
  public data4 = [50, 10, 100];



}
