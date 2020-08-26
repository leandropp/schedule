import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataFake: Array<{ startTime: string, endTime: string, description: string}>;

  constructor() { }


  ngOnInit(): void {
    this.dataFake = [
      { startTime: '07h00', endTime: '08h00', description: '1ª hora de trabalho'}
    ];
  }

}
