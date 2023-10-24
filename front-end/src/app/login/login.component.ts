import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login-request';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: LoginRequest = new LoginRequest();
  loginMessage: string = '';
  switchLoginForm: boolean = true;

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) {}

  onLoginSubmit() {
    this.http.post('http://localhost:18080/api/adopter/login', this.loginRequest).subscribe(
      (response: any) => {
        this.loginMessage = response.message;
        if (response.message === 'Login successful') {
          this.router.navigate(['/']);
          

          this.authService.setIsUserLoggedIn(true);
          this.authService.setIsConnected(true);

          if(response.userId){
            this.authService.setUserId(response.userId);
          }

          alert("Success" + response.userId)
        }
      },
      (error) => {
        this.loginMessage = 'Login failed'; 
        alert("Failed.")
      }
    );
  }

  onAdminLoginSubmit() {
    this.http.post('http://localhost:18080/api/admin/login', this.loginRequest, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.loginMessage = response; 
        if (response === 'Login successful') {
          this.router.navigate(['/']);
          alert("Success.")

          this.authService.setIsAdminLoggedIn(true);
          this.authService.setIsConnected(true);
        }
      },
      (error) => {
        this.loginMessage = 'Login failed'; 
        alert("Failed.")
      }
    );
  }
  
  toggleFormVisibility() {
    this.switchLoginForm = !this.switchLoginForm;
  }

  goToRegister() {
    this.router.navigate(['/register']); 
  }
}
