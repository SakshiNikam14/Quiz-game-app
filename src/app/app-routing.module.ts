import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { AddingQueComponent } from './adding-que/adding-que.component';
import { EditRecComponent } from './edit-rec/edit-rec.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { SummaryComponent } from './summary/summary.component';
import { PastScoresComponent } from './past-scores/past-scores.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GraphsComponent } from './graphs/graphs.component';

const routes: Routes = [
  {
    component:RegistrationComponent,
    path:'registration'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:WelcomeComponent,
    path:'homepage'
  },
  {
    component:UserdashboardComponent,
    path:'user-dashboard'
  },
  {
    component:AdminDashboardComponent,
    path:'admin-dashboard'
  },
  {
    component:ViewQuestionsComponent,
    path:'view-questions'
  },
  {
    component:AddingQueComponent,
    path:'aadding-que'
  },
  {
    component:EditRecComponent,
    path:'edit-question/:id'
  },
  {
    component:TakeQuizComponent,
    path:'dashboard/take-quiz'
  },
  {
     component:SummaryComponent,
     path:'dashboard/summary'
  },
  {
     component:PastScoresComponent,
     path:'dashboard/past-scores'
  },
  {
    component:GraphsComponent,
    path:'graphs'
  },
  {
    component:NotFoundComponent,
    path:'404'
  },
  { path: '**', redirectTo: '/404' }

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
