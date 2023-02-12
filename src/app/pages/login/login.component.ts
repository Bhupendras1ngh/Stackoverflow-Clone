import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   constructor(private fb:FormBuilder){}
   ngOnInit(){}


   loginForm = this.fb.group({
    email :['' ,[Validators.required ,Validators.email]],
    password :['' ,[Validators.required ,Validators.minLength(5)]]
   })
}
