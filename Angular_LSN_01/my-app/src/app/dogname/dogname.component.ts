import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dogname',
  templateUrl: './dogname.component.html',
  styleUrls: ['./dogname.component.css']
})
export class DognameComponent implements OnInit {

  @Input() name: string;
  @Output() dogDeleted: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteDog() {
    this.dogDeleted.emit(this.name);
  }

}
