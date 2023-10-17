import { Component } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopter-login',
  templateUrl: './adopter-login.component.html',
  styleUrls: ['./adopter-login.component.css']
})
export class AdopterLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticateService, private router: Router){}
  onSubmit(){
    this.router.navigate(['/show-dogs']); //test
    this.authService.loginAsAdopter(this.email, this.password).subscribe(
      (response) => {
        console.log('Login response:', response);
        alert('Success');
        this.router.navigate(['/show-dogs']);
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
