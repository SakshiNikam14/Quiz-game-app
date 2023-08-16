import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private backendUrl1 = 'http://localhost:3001/users';
  private backendUrl2 = 'http://localhost:3001/add-question'; 
  private backendUrl3 = 'http://localhost:3001/delete-question';// Your backend server URL
  private backendUrl4 = 'http://localhost:3001/update-question';
  private backendUrl5 = 'http://localhost:3001/get-question';
  private apiUrl = 'http://localhost:3001/get-scores';
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient ,private router: Router) { }

  savedata(data: any): Observable<any> {
    return this.http.post<any>(this.backendUrl1, data);
  }

  login(email: string, password: string): Observable<any> {
    const userData = { email, password };
    this.isLoggedIn = true;
    // Make an HTTP POST request to your backend for authentication
    return this.http.post<any>('http://localhost:3001/login', userData);
    
}


addQuestion(questionData: any): Observable<any> {
  console.log(questionData);
  
  const url = `${this.backendUrl2}/add-question`;
  return this.http.post<any>('http://localhost:3001/add-question', questionData);
}

  getList()
  {
    return this.http.get(this.backendUrl2);
  }

  deleteRec(id:any)
  {
    return this.http.delete(`${this.backendUrl3}/${id}`);
  }
  getCurrentResto(id:any)
  {
    return this.http.get(`${this.backendUrl3}/${id}`);
  }
  updateresto(id:any,data:any)
  {
    return this.http.put(`${this.backendUrl3}/${id}`,data);
  }
  updateQuestion(questionId: number, questionData: any): Observable<any> {
    const url = `${this.backendUrl4}/${questionId}`;
    console.log(4);
    
    return this.http.put<any>(url, questionData);
  }

  getQuestionDetails(questionId: number): Observable<any> {
    const url = `${this.backendUrl5}/${questionId}`;
    return this.http.get<any>(url);
  }
  
  getQuestionsByDifficulty(difficulty: string): Observable<any[]> {
    // Make an HTTP GET request to fetch questions based on difficulty level
    const url = `http://localhost:3001/get-question?difficulty=${difficulty}`;
    return this.http.get<any[]>(url);
  }

  saveTestScore(testScoreData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/save-test-score', testScoreData);
  }

  getScores(): Observable<any[]> {
    
    return this.http.get<any[]>(this.apiUrl);
    
}
}
