import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogNames: string[] = [];


  constructor() {
   }

  ngOnInit(): void {
    this.fetchDogNames();
  }

  fetchDogNames() {
    this.dogNames = ['Bobik', 'Sharik'];
  }

  onClick(newName: string) {
    this.dogNames.push(newName);
  }

  deleteSelected(index: number) {
    this.dogNames.splice(index, 1);
  }

  addGoodDog(index: number) {
    this.dogNames[index] = "Good Dog " + this.dogNames[index];
  }

  ngOnDestroy(): void {
  }

}
