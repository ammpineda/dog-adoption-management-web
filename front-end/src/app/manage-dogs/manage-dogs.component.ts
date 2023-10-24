import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-dogs',
  templateUrl: './manage-dogs.component.html',
  styleUrls: ['./manage-dogs.component.css']
})
export class ManageDogsComponent implements OnInit {
  searchQuery: string = '';
  filterType: string = 'name';
  dogs: Dog[] = []; // Property to hold the list of dogs
  filteredDogs: Dog[] = [];
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
    this.router.navigate(['/manage-dog-details', dogId]); 
  }

  navigateToAddDog() {
    this.router.navigate(['/add-dog']); 
  }

  applyFilter() {
    if (this.filterType === 'name') {
      this.getDogsByName(this.searchQuery);
    } else if (this.filterType === 'gender') {
      this.getDogsByGender(this.searchQuery);
    } else if (this.filterType === 'status') {
      this.getDogsByStatus(this.searchQuery);
    }
  }

  getDogsByName(name: string) {
    this.http.get<any[]>(`http://localhost:18080/api/dog/get-dog/name/${name}`)
      .subscribe(
        (dogs) => {
          console.log('Dogs by Name:', dogs);
          this.dogs = dogs;
          this.router.navigate(['/manage-dogs']);
        },
        (error) => {
          console.error('Failed to get dogs by name:', error);
        }
      );
  }

  getDogsByGender(name: string) {
    this.http.get<any[]>(`http://localhost:18080/api/dog/get-dog/gender/${name}`)
      .subscribe(
        (dogs) => {
          console.log('Dogs by Name:', dogs);
          this.dogs = dogs;
          this.router.navigate(['/manage-dogs']);
        },
        (error) => {
          console.error('Failed to get dogs by name:', error);
        }
      );
  }

  getDogsByStatus(name: string) {
    this.http.get<any[]>(`http://localhost:18080/api/dog/get-dog/status/${name}`)
      .subscribe(
        (dogs) => {
          console.log('Dogs by Name:', dogs);
          this.dogs = dogs;
          this.router.navigate(['/manage-dogs']);
        },
        (error) => {
          console.error('Failed to get dogs by name:', error);
        }
      );
  }
}