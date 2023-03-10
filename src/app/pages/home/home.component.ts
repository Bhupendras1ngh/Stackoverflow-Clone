import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(public questionservice :QuestionService ,public userservice: UserService){

}
ngOnInit(){
  this.questionservice.fetchQuestions().subscribe((res :any)=>{
   this.questionList =res;
   console.log(res);
  })
}
  question:string= "";
  questionList :Array<any> =[];
  post(){
    this.questionservice.postQuestion({
      username :this.userservice.user.username,
      question :this.question,
      solutions: []
    }).subscribe((res)=>{
      console.log(res);
      this.questionList.push(res);
      this.question ="";
    })
  }
}
