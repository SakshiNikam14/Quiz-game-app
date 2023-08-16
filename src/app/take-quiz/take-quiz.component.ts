import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { SelectItem } from 'primeng/api';
import { HttpHeaders , HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedOption: number | null = null;
  correctAnswers: number = 0;
  difficultyLevels: SelectItem[] = [
    { label: 'Hard', value: 'hard' },
    { label: 'Medium', value: 'medium' },
    { label: 'Easy', value: 'Easy' } // Change 'Easy' to 'easy'
  ];

  selectedDifficulty: string = 'high'; // Set default difficulty level

  constructor(private registrationService: RegistrationService , private httpClient: HttpClient ) {}


  ngOnInit(): void {}

  startQuiz(): void {
    // Make an HTTP request to fetch questions based on the selected difficulty
    this.registrationService.getQuestionsByDifficulty(this.selectedDifficulty)
      .subscribe(
        (questions) => {
          // Process the fetched questions here
          console.log(questions);
  
          // Transform the object-based data to an array
          this.questions = Object.values(questions);
  
          this.currentQuestionIndex = 0; // Reset the current question index
          this.correctAnswers = 0; // Reset the correct answers count
        }
      );
  }
  

  saveAnswer(): void {
    if (this.selectedOption !== null) {
      const selectedAnswer = this.questions[this.currentQuestionIndex].options[this.selectedOption];
      if (selectedAnswer === this.questions[this.currentQuestionIndex].correct_option) {
        this.correctAnswers++;
      }
      this.selectedOption = null; // Clear the selected option for the next question
  
      // Check if the quiz is completed
      if (this.currentQuestionIndex === this.questions.length - 1) {
        console.log('Quiz completed. Saving test score...');
        this.saveTestScore(this.correctAnswers);
      } else {
        this.nextQuestion(); // Move to the next question
      }
    }
  }

  nextQuestion(): void {
    console.log('Moving to the next question...');
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      console.log('Next question index:', this.currentQuestionIndex);
    }
  }

  saveTestScore(score: number): void {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer your_token_here'
    });

    console.log('Saving test score...');
    const testScoreData = {
      score: score
    };
  
    this.httpClient.post('http://localhost:3001/save-test-score', testScoreData, { headers }).subscribe(
      () => {
        console.log('Test score saved successfully');
        
        // Handle any further actions, like showing a success message to the user
      },
      (error: any) => {
        console.error('Error saving test score:', error);
        // Handle error cases
      }
    );
    }
  }

