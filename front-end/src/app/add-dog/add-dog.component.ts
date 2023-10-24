import { Component } from '@angular/core';
import { Dog } from '../model/dog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
})
export class AddDogComponent {
  dog: Dog = new Dog();
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private router:Router) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
    if (this.selectedImage) {
      this.dog.displayImage = this.selectedImage.name; // Store the file name as the address
    }
  }

  onSubmit() {
    this.http.post('http://localhost:18080/api/dog/register-dog', this.dog).subscribe(
      (response: any) => {
        console.log('Dog added successfully:', response);
        // You can implement a success message or redirect the user
        alert("Success")
        this.router.navigate(['/manage-dogs']);
      },
      (error) => {
        console.error('Failed to add dog:', error);
        // You can implement an error message or provide feedback to the user
      }
    );
  }
}
