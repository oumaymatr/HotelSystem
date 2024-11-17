import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  // Save token to localStorage
  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN); // Corrected `localstorage` to `localStorage`
    window.localStorage.setItem(TOKEN, token);
  }

  // Save user object to localStorage
  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  // Get token from localStorage
  static getToken(): string | null {
    return window.localStorage.getItem(TOKEN);
  }

  // Get user object from localStorage
  static getUser(): any {
    const user = window.localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  // Get user ID
  static getUserId(): string {
    const user = this.getUser();
    return user ? user.id : '';
  }

  // Get user role
  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }

  // Check if admin is logged in
  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const role = this.getUserRole();
    return role === 'ADMIN';
  }

  // Check if customer is logged in
  static isCustomerLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const role = this.getUserRole();
    return role === 'CUSTOMER';
  }

  // Sign out the user
  static signOut(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
