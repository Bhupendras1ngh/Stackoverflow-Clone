import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
constructor(public userService :UserService ,private router :Router){}
ngOnInit(){
  if(this.userService.user ==undefined){
    let local =localStorage.getItem('user');
    if(local != null){
      this.userService.user = JSON.parse(local);
    }
  }
}
logout(){
  this.userService.user =undefined;
  setTimeout(()=>{
    this.router.navigate(['/login']);
  }, 500)
  localStorage.clear();

}
}
