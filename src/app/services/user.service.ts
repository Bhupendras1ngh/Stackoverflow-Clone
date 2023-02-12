import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }
public user: any;
  public createAccount(userObj:any){
   return this.http.post('http://localhost:3000/users' , userObj);
  }

  public getUser(email :any){
   return this.http.get('http://localhost:3000/users',email );
  }
}
