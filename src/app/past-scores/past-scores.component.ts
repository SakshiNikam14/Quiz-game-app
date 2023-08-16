import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-past-scores',
  templateUrl: './past-scores.component.html',
  styleUrls: ['./past-scores.component.css'],
  providers: [DatePipe]
})
export class PastScoresComponent {

  array:any= [];
  constructor(private resto:RegistrationService)
  {

  }

  ngOnInit()
  {
    this.resto.getScores().subscribe((data)=>
    {
      console.log(data);
      this.array= data ;
        
    });
  }

}
