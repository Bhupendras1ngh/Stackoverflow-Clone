import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
constructor(private  fb:FormBuilder){}
  createForm = this.fb.group({
    email :['' ,[Validators.required ,Validators.email]],
    username : ['' ,[Validators.required ,Validators.maxLength(6)]],
     password:['' ,[ Validators.required ,Validators.minLength(5)]]
  })
}
