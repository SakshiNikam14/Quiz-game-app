import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // Used to display error messages
  constructor(private fb: FormBuilder, private authService: RegistrationService ,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['user', [Validators.required]]
    });
  }

  onSubmit() {
    console.log("inside");
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password, role } = this.loginForm.value;

    this.authService.login(email, password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);

        if (role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }
      },
      (error) => {
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    );
  }
}
