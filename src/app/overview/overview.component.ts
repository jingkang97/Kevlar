import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  x:string;
  constructor() { 
    this.x = 'hi';
  }

  ngOnInit(): void {
  }



}
