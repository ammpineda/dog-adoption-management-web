import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private adopterApiUrl = 'http://localhost:18080/adopter/login';

  constructor(private http: HttpClient) { }

  loginAsAdopter(email:string, password:string):Observable<string>{
    const loginRequest = {email, password};
    return this.http.post<string>(this.adopterApiUrl, loginRequest);
  }
}
