import { Component, Input } from '@angular/core';
import { Dog } from '../model/dog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Application } from '../model/application';

@Component({
  selector: 'app-show-dog-details',
  templateUrl: './show-dog-details.component.html',
  styleUrls: ['./show-dog-details.component.css']
})
export class ShowDogDetailsComponent {
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

  adoptDog(selectedDog: Dog){
    const userId = this.authService.getUserId();

    const adoptionRequest = {
      applicant: {
        id: userId,
      },
      dog: {
        id: selectedDog.id,
      },
    };

    this.http.post('http://localhost:18080/api/application/submit', adoptionRequest).subscribe(
    (response: any) => {
      console.log('Adoption successful:', response);
      this.router.navigate(['/show-dogs']);
    },
    (error) => {
      console.error('Adoption failed:', error);
    }
  );

  }

}
