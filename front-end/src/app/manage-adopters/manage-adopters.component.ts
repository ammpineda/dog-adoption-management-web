import { Component, OnInit } from '@angular/core';
import { Adopter } from '../model/adopter';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-adopters',
  templateUrl: './manage-adopters.component.html',
  styleUrls: ['./manage-adopters.component.css']
})
export class ManageAdoptersComponent implements OnInit {
  searchQuery: string = '';
  filterType: string = 'fullName';
  adopters: Adopter[] = [];
  filteredAdopters: Adopter[] = [];
  selectedAdopter: Adopter = new Adopter();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(){
    this.fetchAdopters();
  }
  
  fetchAdopters(){
    this.http.get<Adopter[]>('http://localhost:18080/api/adopter/all-adopter')
      .subscribe((adopters) => {
        this.adopters = adopters;
      });
  }

  navigateToAdopterDetails(adopter:Adopter) {
    const adopterId = adopter.id;
    this.router.navigate(['/manage-adopter-details', adopterId]);
  }

  navigateToAddAdopter(){
    this.router.navigate(['/add-adopter']);
  }

  applyFilter() {
    if (this.filterType === 'fullName') {
      this.getAdoptersByName(this.searchQuery);
    } else if (this.filterType === 'email') {
      this.getAdoptersByEmail(this.searchQuery);
    } else if (this.filterType === 'phoneNumber') {
      this.getAdoptersByPhone(this.searchQuery);
    }
  }
  
  getAdoptersByName(fullName: string) {
    this.http.get<any[]>(`http://localhost:18080/api/adopter/get-adopter/name/${fullName}`)
      .subscribe(
        (adopters) => {
          this.adopters = adopters;
        }
      );
  }
  
  getAdoptersByEmail(email: string) {
    this.http.get<any[]>(`http://localhost:18080/api/adopter/get-adopter/email/${email}`)
      .subscribe(
        (adopters) => {
          this.adopters = adopters;
        }
      );
  }
  
  getAdoptersByPhone(phone: string) {
    this.http.get<any[]>(`http://localhost:18080/api/adopter/get-adopter/phone/${phone}`)
      .subscribe(
        (adopters) => {
          this.adopters = adopters;
        }
      );
  }

}
