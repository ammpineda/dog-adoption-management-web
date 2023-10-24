import { Component, Input } from '@angular/core';
import { Adopter } from '../model/adopter';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-manage-adopter-details',
  templateUrl: './manage-adopter-details.component.html',
  styleUrls: ['./manage-adopter-details.component.css']
})
export class ManageAdopterDetailsComponent {
  @Input() selectedAdopter: Adopter = new Adopter();
  editMode: boolean = false;
  newDisplayImage: File | undefined = undefined;

  constructor(private http:HttpClient, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.route.params.subscribe((params) => {
      const adopterId = params['id'];
      if (adopterId) {
        this.loadAdopterDetails(adopterId);
      }
    });
  }

  loadAdopterDetails(adopterId: string){
    this.http.get<Adopter>(`http://localhost:18080/api/adopter/get-adopter/id/${adopterId}`).subscribe(
      (adopter: Adopter) => {
        this.selectedAdopter = adopter;
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newDisplayImage = file;
  }

  toggleEditMode(){
    this.editMode = !this.editMode;
  };

  saveChanges() {
    const updatedAdopter = {
      id: this.selectedAdopter.id,
      fullName: this.selectedAdopter.fullName,
      displayImage: this.selectedAdopter.displayImage,
      email: this.selectedAdopter.email,
      password: this.selectedAdopter.password,
      phoneNumber: this.selectedAdopter.phoneNumber,
      homeAddress: this.selectedAdopter.homeAddress
    }

    if (this.newDisplayImage){
      updatedAdopter.displayImage = this.newDisplayImage.name;
    }

    this.http.put(`http://localhost:18080/api/adopter/update-adopter/${updatedAdopter.id}`, updatedAdopter)
      .subscribe(
        (response:any) => {
          this.toggleEditMode(); 
          alert("Changes saved.")
          window.location.reload();
        }
      );
  }

  deleteRecord() {
    if (!this.selectedAdopter || !this.selectedAdopter.id) {
      console.error('Invalid adopter record');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this Adopter record?');

    if (!confirmed) {
      return;
    }

    const adopterId = this.selectedAdopter.id;

    this.http.delete(`http://localhost:18080/api/adopter/delete-adopter/${adopterId}`).subscribe(
    (response: any) => {
      console.log('Adopter record deleted:', response);
      this.router.navigate(['/manage-adopters'])
    }
  );
  }

}
