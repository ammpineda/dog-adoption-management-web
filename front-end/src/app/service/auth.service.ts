import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private isAdminLoggedIn = new BehaviorSubject<boolean>(false);
  private isUserLoggedIn = new BehaviorSubject<boolean>(false);
  private isConnected = new BehaviorSubject<boolean>(false);

  private userId: number = this.getFromLocalStorage('userId', 0);

  constructor(){
    this.isAdminLoggedIn.next(this.getFromLocalStorage('isAdminLoggedIn', false));
    this.isUserLoggedIn.next(this.getFromLocalStorage('isUserLoggedIn', false));
    this.isConnected.next(this.getFromLocalStorage('isConnected', false));
  }

  setIsAdminLoggedIn(value: boolean) {
    this.isAdminLoggedIn.next(value);
    this.saveToLocalStorage('isAdminLoggedIn', value);
  }

  getIsAdminLoggedIn() {
    return this.isAdminLoggedIn.asObservable();
  }

  setIsUserLoggedIn(value: boolean) {
    this.isUserLoggedIn.next(value);
    this.saveToLocalStorage('isUserLoggedIn', value);
  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn.asObservable();
  }

  setIsConnected(value: boolean) {
    this.isConnected.next(value);
    this.saveToLocalStorage('isConnected', value);
  }

  getIsConnected() {
    return this.isConnected.asObservable();
  }

  private saveToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private getFromLocalStorage(key: string, defaultValue: any) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  }

  setUserId(id:number):void {
    this.userId = id;
    this.saveToLocalStorage('userId', id); 
  }

  getUserId(): number | null {
    return this.userId;
  }


}
