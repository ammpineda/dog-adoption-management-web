import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../model/dog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent implements OnInit {
  dogs: Dog[] = []; // Property to hold the list of dogs
  selectedDog: Dog = new Dog(); 

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchDogs();
  }

  fetchDogs() {
    this.http.get<Dog[]>('http://localhost:18080/api/dog/all-dog')
      .subscribe((dogs) => {
        this.dogs = dogs;
      });
  }

  navigateToDogDetails(dog: Dog) {
    const dogId = dog.id;
    this.router.navigate(['/show-dog-details', dogId]); 
  }
}
