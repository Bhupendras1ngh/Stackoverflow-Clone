import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   constructor(private fb:FormBuilder ,private userService :UserService ,public snackbar: MatSnackBar ,public router :Router){}
   ngOnInit(){}


   loginForm = this.fb.group({
    email :['' ,[Validators.required ,Validators.email]],
    password :['' ,[Validators.required ,Validators.minLength(5)]]
   })

   login(){
    this.userService.getUser(this.loginForm.value.email).subscribe((res :any)=>{
      if(res.length == 0)this.snackbar.open("Acount Does't Exist" ,'ok');
      else{
        if(res[0].password == this.loginForm.value.password){
          console.log(res);
          this.userService.user =res[0];
          setTimeout(()=>{
            this.router.navigate(['/home']);
          } ,1000);
        }
        else{
          this.snackbar.open('Incorrect Password' ,'ok');
        }
      }
    })
   }
}
