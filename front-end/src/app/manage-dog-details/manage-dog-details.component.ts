import { Component, Input } from '@angular/core';
import { Dog } from '../model/dog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-manage-dog-details',
  templateUrl: './manage-dog-details.component.html',
  styleUrls: ['./manage-dog-details.component.css']
})
export class ManageDogDetailsComponent {
  @Input() selectedDog: Dog = new Dog();
  editMode: boolean = false;
  newDisplayImage: File | undefined = undefined;

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
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newDisplayImage = file;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    const updatedDog = {
      id: this.selectedDog.id,
      name: this.selectedDog.name,
      gender: this.selectedDog.gender,
      breed: this.selectedDog.breed,
      age: this.selectedDog.age,
      adoptionStatus: this.selectedDog.adoptionStatus,
      birthDate: this.selectedDog.birthDate,
      color: this.selectedDog.color,
      size: this.selectedDog.size,
      description: this.selectedDog.description,
      displayImage: this.selectedDog.displayImage
    };

    if (this.newDisplayImage) {
      updatedDog.displayImage = this.newDisplayImage.name; 
    }

    this.http.put(`http://localhost:18080/api/dog/update-dog/${updatedDog.id}`, updatedDog)
    .subscribe(
      (response: any) => {
        this.toggleEditMode(); 
        alert("Changes saved.")
        window.location.reload();
      }
    );


  }

  deleteRecord() {
    if (!this.selectedDog || !this.selectedDog.id) {
      console.error('Invalid dog record');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this dog record?');

    if (!confirmed) {
      return;
    }

    const dogId = this.selectedDog.id;

    this.http.delete(`http://localhost:18080/api/dog/delete-dog/${dogId}`).subscribe(
    (response: any) => {
      console.log('Dog record deleted:', response);
      this.router.navigate(['/manage-dogs'])
    }
  );
  }
}
