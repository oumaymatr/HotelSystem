import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message'; // Assuming you have this import for message service
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NgZorroAntdModule } from '../../../NgZorroAntdModules';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule
  ]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      name: [null, Validators.required],
    });
  }

  submitForm() {
    // Call the register method of authService with the form values
    this.authService.register(this.registerForm.value).subscribe(
      (res) => {
        // Check if the response contains an ID (assuming this means success)
        if (res.id != null) {
          this.message.success("Signup successful", { nzDuration: 5000 });
          this.router.navigateByUrl("/"); // Redirect to the home page or login page
        } else {
          // If no ID is returned, show an error message
          this.message.error('Signup failed, please try again', { nzDuration: 5000 });
        }
      },
      (error) => {
        // Handle errors if any occur during the request
        this.message.error('An error occurred. Please try again later.', { nzDuration: 5000 });
      }
    );
  }
}
