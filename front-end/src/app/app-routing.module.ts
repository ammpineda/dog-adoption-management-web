import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowDogDetailsComponent } from './show-dog-details/show-dog-details.component';
import { ShowApplicationsComponent } from './show-applications/show-applications.component';
import { ShowApplicationDetailsComponent } from './show-application-details/show-application-details.component';
import { ManageDogsComponent } from './manage-dogs/manage-dogs.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { ManageDogDetailsComponent } from './manage-dog-details/manage-dog-details.component';
import { ManageAdoptersComponent } from './manage-adopters/manage-adopters.component';
import { ManageAdopterDetailsComponent } from './manage-adopter-details/manage-adopter-details.component';
import { AddAdopterComponent } from './add-adopter/add-adopter.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { ManageApplicationDetailsComponent } from './manage-application-details/manage-application-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch:'full'},
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'show-dogs', component: ShowDogsComponent},
  { path: 'show-dog-details/:id', component: ShowDogDetailsComponent },
  { path: 'show-applications', component: ShowApplicationsComponent },
  { path: 'show-application-details/:id', component: ShowApplicationDetailsComponent },
  { path: 'manage-dogs', component: ManageDogsComponent },
  { path: 'manage-dog-details/:id', component: ManageDogDetailsComponent },
  { path: 'add-dog', component: AddDogComponent },
  { path: 'manage-adopters', component: ManageAdoptersComponent },
  { path: 'manage-adopter-details/:id', component: ManageAdopterDetailsComponent },
  { path: 'add-adopter', component: AddAdopterComponent },
  { path: 'manage-applications', component: ManageApplicationsComponent },
  { path: 'manage-application-details/:id', component: ManageApplicationDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
