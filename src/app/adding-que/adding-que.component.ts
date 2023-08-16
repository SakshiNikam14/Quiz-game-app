import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../services/registration.service';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-adding-que',
  templateUrl: './adding-que.component.html',
  styleUrls: ['./adding-que.component.css']
})
export class AddingQueComponent {
  questionForm: FormGroup;
  difficultyLevels: any[] = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  

  constructor(private fb: FormBuilder, private authService: RegistrationService) {

    this.questionForm = this.fb.group({
      
      question_text: ['', Validators.required],
      options: this.fb.group({
        options1: [''],
        options2: [''],
        options3: [''],
        options4: ['']
      }),
      correct_option: ['', Validators.required],
      difficulty_level: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const options1 = this.questionForm.get('options.options1')?.value;
    console.log(options1);
    const options2 = this.questionForm.get('options.options2')?.value;
    const options3 = this.questionForm.get('options.options3')?.value;
    const options4 = this.questionForm.get('options.options4')?.value;
  
    const questionData = {
      question_text: this.questionForm.value.question_text,
      options: {
        option1: options1,
        option2: options2,
        option3: options3,
        option4: options4
      },
      correct_option: this.questionForm.value.correct_option,
      difficulty_level: this.questionForm.value.difficulty_level
    };

    console.log(questionData.options.option1);

  
    this.authService.addQuestion(questionData).subscribe(
      
      (response) => {
        console.log('Question added successfully:', response);
        // Clear the form or take other actions
      },
      (error) => {
        console.error('Error adding question:', error);
      }
    );
  }
  
}
