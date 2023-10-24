import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  isAdminLoggedIn: boolean = false;
  isUserLoggedIn: boolean = false;
  isConnected: boolean = false;

  constructor(private route: Router, private http:HttpClient, private authService: AuthService){}

  ngOnInit() {
    this.authService.getIsAdminLoggedIn().subscribe((value) => {
      this.isAdminLoggedIn = value;
    });

    this.authService.getIsUserLoggedIn().subscribe((value) => {
      this.isUserLoggedIn = value;
    });

    this.authService.getIsConnected().subscribe((value) => {
      this.isConnected = value;
    });
  }

  onLogOut() {
    this.authService.setIsConnected(false);
    this.authService.setIsAdminLoggedIn(false);
    this.authService.setIsUserLoggedIn(false);
  }

}
