import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  menuItems: MenuItem[] = [
    { label: 'Add Question', icon: 'pi pi-plus', routerLink: '/add-question' },
    { label: 'View All Questions', icon: 'pi pi-list', routerLink: '/view-questions' }
  ];

  questionForm: FormGroup = this.fb.group({  // Provide a default initial value
    question_text: '',
    options: this.fb.group({
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    }),
    correct_option: '',
    difficulty_level: ''
  });


  difficultyLevels: any[] = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  constructor(private fb: FormBuilder, private authService: RegistrationService) {
  }

  ngOnInit() {
    this.questionForm = this.fb.group({
      question_text: '',
      options: this.fb.group({
        option1: '',
        option2: '',
        option3: '',
        option4: ''
      }),
      correct_option: '',
      difficulty_level: ''

    });
  }

  onSubmit() {
    const questionData = this.questionForm.value;
   console.log(questionData);
   
    this.authService.addQuestion(questionData).subscribe(
      (response) => {
        console.log('Question added successfully:', response);
        // Clear the form or take other actions
        this.questionForm.reset();
      },
      (error) => {
        console.error('Error adding question:', error);
      }
    );
  }
}
