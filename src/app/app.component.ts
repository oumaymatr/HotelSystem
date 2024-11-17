import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgZorroAntdModule } from './NgZorroAntdModules';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserStorageService } from './auth/services/storage/user-storage.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hotelweb';
  isCustomerLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    // Check if the code is running on the browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Only run this code in the browser
      this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
          this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
        }
      });
    }
  }

  logout() {
    if (this.isBrowser) {
      UserStorageService.signOut();
      this.router.navigateByUrl('/');
    }
  }
}
