import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
constructor(public questionservice :QuestionService , private route :ActivatedRoute  ,public userservice :UserService){}
ngOnInit(){
  this.questionID =this.route.snapshot.paramMap.get('questionid');
  this.questionservice.fetchQuestionwithID(this.questionID).subscribe((res:any)=>{
    console.log(res);
    this.questionObj =res;
  })
}

solutionText :string ="";
questionID:any;
questionObj :any;
postSolution(){
   let solutionObj = {
    username : this.userservice.user.username,
    solution : this.solutionText,
    upvotes :[],
    downvotes:[]
   }
   this.questionObj.solutions.push(solutionObj);
   this.questionservice.updateQuestionData(this.questionObj).subscribe((res:any)=>{
    console.log(res);
    this.solutionText ="";
   })

}
vote(index:number ,param :number){
   if( param == 1){
     if( !(this.questionObj.solutions[index].upvotes.indexOf(this.userservice.user.id) >= 0)){
      this.questionObj.solutions[index].upvotes.push(this.userservice.user.id);
     }
     for( let i  =0 ;i <this.questionObj.solutions[index].downvotes.length() ;i++){
       if(this.questionObj.solutions[index].downvotes[i] == this.userservice.user.id){
        this.questionObj.solutions[index].downvotes.splice(i ,1);
       }
     }
   }
   else{
    if( !(this.questionObj.solutions[index].downvotes.indexOf(this.userservice.user.id) >= 0)){
      this.questionObj.solutions[index].downvotes.push(this.userservice.user.id);
     }
     for( let i  =0 ;i <this.questionObj.solutions[index].upvotes.length() ;i++){
      if(this.questionObj.solutions[index].upvotes[i] == this.userservice.user.id){
       this.questionObj.solutions[index].upvotes.splice(i ,1);
      }
    }
   }
   this.questionservice.updateQuestionData(this.questionObj);
}

}
