import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-applications',
  templateUrl: './manage-applications.component.html',
  styleUrls: ['./manage-applications.component.css']
})
export class ManageApplicationsComponent implements OnInit{
  applications: any[] = [];

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.http.get(`http://localhost:18080/api/application/all-application`)
      .subscribe((data:any) => {
        this.applications = data;
      });
  }
}
