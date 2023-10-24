import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../model/dog';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-show-application-details',
  templateUrl: './show-application-details.component.html',
  styleUrls: ['./show-application-details.component.css'],
})
export class ShowApplicationDetailsComponent {
  @Input() selectedDog: Dog = new Dog();

  constructor(private http:HttpClient, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.route.params.subscribe((params) => {
      const dogId = params['id'];
      if (dogId) {
        this.loadDogDetails(dogId);
      }
    });
  }

  loadDogDetails(dogId: string) {
    this.http.get<Dog>(`http://localhost:18080/api/dog/get-dog/id/${dogId}`).subscribe(
      (dog: Dog) => {
        this.selectedDog = dog;
      },
      (error) => {
        console.error('Failed to load dog details:', error);
      }
    );
  }
}
