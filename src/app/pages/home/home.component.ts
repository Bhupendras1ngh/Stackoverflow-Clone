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
  question:string= "";
  post(){
    this.questionservice.postQuestion({
      username :this.userservice.user.username,
      question :this.question,
      solutions: []
    }).subscribe((res)=>{
      console.log(res);
      console.log("post question");
      this.question ="";
    })
  }
}
