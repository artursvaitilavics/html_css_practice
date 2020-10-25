import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Input() name: string;
  @Output() formEventFired: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    console.log(f.value);
  }

}
