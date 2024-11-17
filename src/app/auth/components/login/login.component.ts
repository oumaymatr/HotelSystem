import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { NgZorroAntdModule } from '../../../NgZorroAntdModules';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgZorroAntdModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submitForm() {
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        if (res.userId != null) {
          const user = {
            id: res.userId,
            role: res.userRole,
          };
          UserStorageService.saveUser(user);
          UserStorageService.saveToken(res.jwt);

          if (UserStorageService.isAdminLoggedIn()) {
            this.router.navigateByUrl('/admin/dashboard');
          } else if (UserStorageService.isCustomerLoggedIn()) {
            this.router.navigateByUrl('/customer/rooms');
          }
        }
      },
      (error) => {
        this.message.error(`Bad credentials`, { nzDuration: 5000 });
      }
    );
  }
}
