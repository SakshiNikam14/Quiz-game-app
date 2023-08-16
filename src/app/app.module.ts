import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { AddingQueComponent } from './adding-que/adding-que.component';
import { EditRecComponent } from './edit-rec/edit-rec.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { SummaryComponent } from './summary/summary.component';
import { PastScoresComponent } from './past-scores/past-scores.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChartModule } from 'primeng/chart';
import { GraphsComponent } from './graphs/graphs.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserdashboardComponent,
    AdminDashboardComponent,
    ViewQuestionsComponent,
    AddingQueComponent,
    EditRecComponent,
    TakeQuizComponent,
    SummaryComponent,
    PastScoresComponent,
    NotFoundComponent,
    WelcomeComponent,
    GraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,FormsModule,HttpClientModule,RadioButtonModule,MenubarModule,DropdownModule,BrowserAnimationsModule,
    ConfirmPopupModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    ChartModule,
    DatePipe
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
