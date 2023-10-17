import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../model/dog';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent implements OnInit {
  dogs: Dog[] = []; // Property to hold the list of dogs

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchDogs();
  }

  fetchDogs() {
    this.http.get<Dog[]>('http://localhost:18080/dog/all-dog')
      .subscribe((dogs) => {
        this.dogs = dogs;
      });
  }
}
