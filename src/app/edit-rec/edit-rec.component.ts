import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../services/registration.service';
import { MenuItem } from 'primeng/api/menuitem';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-edit-rec',
  templateUrl: './edit-rec.component.html',
  styleUrls: ['./edit-rec.component.css']
})
export class EditRecComponent implements OnInit{

  menuItems: MenuItem[] = [
    { label: 'Add Question', icon: 'pi pi-plus', routerLink: '/add-question' },
    { label: 'View All Questions', icon: 'pi pi-list', routerLink: '/view-questions' }
  ];

  editForm!: FormGroup
  questionId!: number; // Default value

  difficultyLevels: any[] = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];
  alert: boolean=false;

  

  constructor(private fb: FormBuilder, private authService: RegistrationService,private router: Router,private route:ActivatedRoute,private registrationService: RegistrationService) {

  }

  ngOnInit() {
    this.editForm = this.fb.group({
      question_text: ['', Validators.required],
      options: this.fb.group({
        options1: [''],
        options2: [''],
        options3: [''],
        options4: ['']
      }),
      correct_option: ['', Validators.required],
      difficulty_level: ['', Validators.required]
    });// Fetch question details based on ID

    const questionIdParam = this.route.snapshot.paramMap.get('id');
  if (questionIdParam !== null) {
    this.questionId = +questionIdParam;
    this.fetchQuestionDetails(this.questionId);
    console.log(this.questionId);
    
  }
}

fetchQuestionDetails(questionId: number) {
  this.registrationService.getQuestionDetails(questionId).subscribe(
    (questionData) => {
      console.log(questionData);
      
      this.editForm.patchValue(questionData); // Populate form fields with fetched data
    },
    (error) => {
      console.error('Error fetching question details:', error);
    }
  );
}

  onSubmit() {
    if (this.editForm.valid) {
      console.log(1);
      
      const editedQuestionData = this.editForm.value;
      console.log(editedQuestionData);
      console.log(this.questionId);
      
      this.registrationService.updateQuestion(this.questionId, editedQuestionData).subscribe(
        (response) => {
          console.log(2);
          
          console.log('Question updated successfully:', response);
          console.log(editedQuestionData);
          
          // Redirect to view questions page or perform other actions
        },
        (error) => {
          console.log(3);
          
          console.error('Error updating question:', error);
        }
      );
    }
  }
  

  collection() {
    if (this.editForm.valid) {
      const editedQuestionData = this.editForm.value;
      this.registrationService.updateQuestion(this.questionId, editedQuestionData).subscribe(
        (response) => {
          console.log('Question updated successfully:', response);
          // Redirect to view questions page or perform other actions
        },
        (error) => {
          console.error('Error updating question:', error);
        }
      );
    }
  }
  
    
}
