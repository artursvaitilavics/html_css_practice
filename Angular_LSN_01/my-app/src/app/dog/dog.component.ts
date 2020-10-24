import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogName: string = 'Bobis';
  dogAge: number = 4;
  isActive: boolean = false;

  dogNames: string[] = [this.dogName,'Sharik'];


  constructor() { }

  ngOnInit(): void {
  }

  onClick(newName: string) {
    this.dogNames.push(newName);
  }

  deleteSelected(name: string) {
    this.dogNames.splice(this.dogNames.indexOf(name), 1);
  }

}
