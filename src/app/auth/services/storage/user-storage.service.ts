import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  constructor() {}

  // Check if we're running in a browser environment
  private static isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Save token to localStorage
  static saveToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.removeItem(TOKEN);
      localStorage.setItem(TOKEN, token);
    }
  }

  // Save user object to localStorage
  static saveUser(user: any): void {
    if (this.isBrowser()) {
      localStorage.removeItem(USER);
      localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  // Get token from localStorage
  static getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem(TOKEN);
    }
    return null;
  }

  // Get user object from localStorage
  static getUser(): any {
    if (this.isBrowser()) {
      const user = localStorage.getItem(USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
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
    if (!this.isBrowser()) return false;
    const token = this.getToken();
    const role = this.getUserRole();
    return token !== null && role === 'ADMIN';
  }

  // Check if customer is logged in
  static isCustomerLoggedIn(): boolean {
    if (!this.isBrowser()) return false;
    const token = this.getToken();
    const role = this.getUserRole();
    return token !== null && role === 'CUSTOMER';
  }

  // Sign out the user
  static signOut(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(USER);
    }
  }
}
