import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-applications',
  templateUrl: './show-applications.component.html',
  styleUrls: ['./show-applications.component.css']
})
export class ShowApplicationsComponent implements OnInit {
  applications: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.http.get(`http://localhost:4200/api/application/get-application/applicant-id/${userId}`)
        .subscribe((data: any) => {
          this.applications = data; 
        });
    }
  }
}
