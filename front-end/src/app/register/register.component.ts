import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Adopter } from '../model/adopter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  adopter: Adopter = new Adopter();
  registerMessage: string = '';
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
    if (this.selectedImage) {
      this.adopter.displayImage = this.selectedImage.name; // Store the file name as the address
    }
  }
  
  onRegisterSubmit(){
    this.http.post('http://localhost:18080/api/adopter/register-adopter', this.adopter, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.registerMessage = response;
        if (response === 'Registration successful') {
          this.router.navigate(['/login']);
          alert("Success.")
        }
      },
      (error) => {
        this.registerMessage = 'Registration failed';
        alert("Failed.")
      }
    );
  }
}
