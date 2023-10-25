import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageDogsComponent } from './manage-dogs/manage-dogs.component';
import { ManageAdoptersComponent } from './manage-adopters/manage-adopters.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { ShowDogDetailsComponent } from './show-dog-details/show-dog-details.component';
import { ShowApplicationsComponent } from './show-applications/show-applications.component';
import { ShowApplicationDetailsComponent } from './show-application-details/show-application-details.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { ManageDogDetailsComponent } from './manage-dog-details/manage-dog-details.component';
import { ManageAdopterDetailsComponent } from './manage-adopter-details/manage-adopter-details.component';
import { AddAdopterComponent } from './add-adopter/add-adopter.component';
import { ManageApplicationDetailsComponent } from './manage-application-details/manage-application-details.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    ShowDogsComponent,
    LoginComponent,
    RegisterComponent,
    ManageDogsComponent,
    ManageAdoptersComponent,
    ManageApplicationsComponent,
    ShowDogDetailsComponent,
    ShowApplicationsComponent,
    ShowApplicationDetailsComponent,
    AddDogComponent,
    ManageDogDetailsComponent,
    ManageAdopterDetailsComponent,
    AddAdopterComponent,
    ManageApplicationDetailsComponent,
    SupportPageComponent,
    ManageProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
