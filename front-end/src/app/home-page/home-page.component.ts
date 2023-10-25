import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  isAdminLoggedIn: boolean = false;
  isUserLoggedIn: boolean = false;

  constructor(private route: Router, private http:HttpClient, private authService: AuthService){}

  ngOnInit() {
    this.authService.getIsAdminLoggedIn().subscribe((value) => {
      this.isAdminLoggedIn = value;
    });

    this.authService.getIsUserLoggedIn().subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

}
