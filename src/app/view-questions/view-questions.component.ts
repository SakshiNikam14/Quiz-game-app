import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { RegistrationService } from '../services/registration.service';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent {

  menuItems: MenuItem[] = [
    { label: 'Add Question', icon: 'pi pi-plus', routerLink: '/admin-dashboard' },
    { label: 'View All Questions', icon: 'pi pi-list', routerLink: '/view-questions' }
  ];


  array:any= [];
  constructor(private resto:RegistrationService,private confirmationService: ConfirmationService)
  {

  }
  ngOnInit()
  {
    this.resto.getList().subscribe((data)=>
    {
      console.log(data);
      this.array= data ;
        
    });
  }

  showDeleteConfirmation(question: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this question?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => {
        this.deleteQuestion(question); // Call the method to delete the question
      }
    });
  }

  deleteQuestion(question: any) {
    this.resto.deleteRec(question.id).subscribe(
      () => {
        // Successfully deleted, now update the questions list
        this.array = this.array.filter((q: { id: any; }) => q.id !== question.id);
      },
      error => {
        console.error('Error deleting question:', error);
      }
    );
  }
  
  deleteRec(item:any)
  {
    this.array.splice(item-1,1);
    this.resto.deleteRec(item).subscribe((result)=>
    {
      console.log("result",result);
      
    })
  }


}
