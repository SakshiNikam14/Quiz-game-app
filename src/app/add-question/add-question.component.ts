import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class LoginComponent {
  addForm: FormGroup;
  errorMessage: string = ''; // Used to display error messages
  constructor(private fb: FormBuilder, private authService: RegistrationService ,private router: Router) {
    this.addForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['user', [Validators.required]]
    });
  }

  onSubmit() {
    console.log("inside");
    if (this.addForm.invalid) {
      return;
    }

    const { email, password, role } = this.addForm.value;

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
