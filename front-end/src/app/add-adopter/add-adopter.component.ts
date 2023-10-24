import { Component } from '@angular/core';
import { Adopter } from '../model/adopter';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-adopter',
  templateUrl: './add-adopter.component.html',
  styleUrls: ['./add-adopter.component.css']
})
export class AddAdopterComponent {
  adopter: Adopter = new Adopter();
  registerMessage: string = '';
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private router:Router) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
    if (this.selectedImage) {
      this.adopter.displayImage = this.selectedImage.name;
    }
  }

  onSubmit(){
    this.http.post('http://localhost:18080/api/adopter/register-adopter', this.adopter, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.registerMessage = response;
        if (response === 'Registration successful') {
          this.router.navigate(['/manage-adopters']);
          alert("Success.")
        }
      }
    );
  }

}
