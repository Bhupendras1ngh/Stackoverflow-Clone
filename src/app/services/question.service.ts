import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private http :HttpClient) { }

   currentQuestionObject: any ;

  public postQuestion(questionObj:any){
    return this.http.post<any>("http://localhost:3000/question" ,questionObj);
  }

  public fetchQuestions(){
    return this.http.get("http://localhost:3000/question");
  }
  public fetchQuestionwithID (id :string){
    return this.http.get("http://localhost:3000/question/" + id);
  }
  public updateQuestionData(newObj :any){
    return this.http.put("http://localhost:3000/question/"+newObj.id , newObj );
  }


}
