import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../model/application';

@Component({
  selector: 'app-manage-application-details',
  templateUrl: './manage-application-details.component.html',
  styleUrls: ['./manage-application-details.component.css']
})
export class ManageApplicationDetailsComponent{
  @Input() selectedApplication: Application = new Application();
  applicant:any;
  dog:any;
  editMode: boolean = false;
  newDisplayImage: File | undefined = undefined;
  statusOptions: string[] = ['Submitted', 'Under Review', 'Approved'];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router:Router){
    this.route.params.subscribe((params) => {
      const applicationId = params['id'];
      if (applicationId) {
        this.loadAdopterDetails(applicationId);
      }
    });
  }

  getStatusWarning(): string | null {
    const selectedStatus = this.selectedApplication.status;

    if (selectedStatus === 'Approved') {
      return 'WARNING: Cannot revert to "Submitted" or "Under Review" if Application is already approved.';
    } else if (selectedStatus === 'Under Review') {
      return 'WARNING: Cannot revert to "Submitted" if Application is already under review.';
    }

    return null;
  }

  loadAdopterDetails(applicationId: string) {
    this.http.get<Application>(`http://localhost:18080/api/application/get-application/id/${applicationId}`).subscribe(
      (application: Application) => {
        this.selectedApplication = application;
        this.applicant = application.applicant;
        this.dog = application.dog;
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newDisplayImage = file;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges(){
    const updatedApplication = {
      id: this.selectedApplication.id,
      status: this.selectedApplication.status,
      submittedDate: this.selectedApplication.submittedDate,
      reviewDate: this.selectedApplication.reviewDate,
      approvalDate: this.selectedApplication.approvalDate
    };

    this.http.put(`http://localhost:18080/api/application/update/${this.selectedApplication.id}`, updatedApplication)
    .subscribe(
      (response: any) => {
        console.log('Application updated:', response);
        this.toggleEditMode(); 
        alert("Changes saved.")
        window.location.reload();
      }
    );

  }

  deleteRecord(){
    if (!this.selectedApplication || !this.selectedApplication.id) {
      console.error('Invalid application record');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this application record?');

    if (!confirmed) {
      return;
    }

    const applicationId = this.selectedApplication.id;

    this.http.delete(`http://localhost:18080/api/application/delete/${applicationId}`).subscribe(
    (response: any) => {
      console.log('Application record deleted:', response);
      this.router.navigate(['/manage-applications'])
    }
  );
  }

}
