import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import { AdopterLoginComponent } from './adopter-login/adopter-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch:'full'},
  { path: 'home-page', component: HomePageComponent },
  { path: 'adopter-login', component: AdopterLoginComponent },
  { path: 'show-dogs', component: ShowDogsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
