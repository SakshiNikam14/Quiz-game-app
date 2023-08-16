import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { MessageService } from 'primeng/api';
import { AbstractControl, ValidatorFn } from '@angular/forms';

function passwordMatchValidator(control: AbstractControl): ValidatorFn {
  return (confirmPasswordControl: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;
    const confirmPassword = confirmPasswordControl.value;
    console.log(password);
    console.log(confirmPassword);
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  registration!: FormGroup;

  constructor(private fb: FormBuilder ,private registrationService: RegistrationService,private messageService: MessageService,
    ) {}
  

  ngOnInit() {
    this.registration = new FormGroup({
      name : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      confirmPassword :new FormControl('',Validators.required)
    });
  }


  showSuccessMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000 // Set the duration in milliseconds for how long the toast should be visible
    });
  }

 

  Collectdata() {
    if (this.registration.valid) {
      const userData = this.registration.value;
      this.registrationService.savedata(userData).subscribe(
        response => {
          console.log('Backend Response:', response);
          this.registration.reset(); // Reset the form
          
          this.registration.reset(); // Reset the form
          this.messageService.add({
            severity: 'success',
            summary: 'Registration Successful',
            detail: 'You have successfully registered!',
            life: 3000 // Set the duration in milliseconds for how long the toast should be visible
          }); // Display success message
          
        },
        error => {
          
          console.error('Registration error:', error);
          // Handle registration error, e.g., display an error message
        }
      );
    }
  }
  
 
  onSubmit() {
    this.Collectdata();
     if (this.registration.valid) {
       const userData = this.registration.value;
       this.registrationService.savedata(userData).subscribe(
           response => {
             console.log('Registration successful:', response);
             // Handle successful registration, e.g., navigate to another page
           },
           error => {
             console.error('Registration error:', error);
             // Handle registration error, e.g., display an error message
          }
       );
     }
   }  
  }
