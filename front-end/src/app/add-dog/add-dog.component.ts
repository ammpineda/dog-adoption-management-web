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
      this.dog.displayImage = this.selectedImage.name; 
    }
  }

  onSubmit() {
    this.http.post('http://localhost:18080/api/dog/register-dog', this.dog).subscribe(
      (response: any) => {
        console.log('Dog added successfully:', response);
        alert("Success")
        this.router.navigate(['/manage-dogs']);
      }
    );
  }
}
