import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Adopter } from '../model/adopter';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
  adopter: Adopter = new Adopter();
  @Input() selectedAdopter: Adopter = new Adopter();
  newDisplayImage: File | undefined = undefined;
  editMode: boolean = false;


  constructor(private http: HttpClient) {}

  ngOnInit(){
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.http.get(`http://localhost:18080/api/adopter/get-adopter/id/${userId}`)
        .subscribe((data: any) => {
          this.adopter = data; 
          this.loadAdopterDetails();
        });
    }
  }

  loadAdopterDetails(){
    this.selectedAdopter = this.adopter;
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
      firstName: this.selectedAdopter.firstName,
      lastName: this.selectedAdopter.lastName,
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

}
