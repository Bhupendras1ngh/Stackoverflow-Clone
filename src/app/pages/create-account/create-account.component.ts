import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
constructor(private  fb:FormBuilder ,public userService :UserService ,private router :Router){}
  createForm = this.fb.group({
    email :['' ,[Validators.required ,Validators.email]],
    username : ['' ,[Validators.required ,Validators.maxLength(6)]],
     password:['' ,[ Validators.required ,Validators.minLength(5)]]
  })

  createAccount(){
    this.userService.createAccount(this.createForm.value).subscribe((res)=>{
      console.log(res);
      setTimeout(()=>{
        this.router.navigate(['/home']);
      } ,1000);

    })
  }
}
