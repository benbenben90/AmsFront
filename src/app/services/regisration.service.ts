import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  user: any;
  constructor(private Http: HttpClient) { }

  createUser(myform:any){
    this.user = {
      'name':myform.value.name,
      'lastName':myform.value.lname,
      'email': myform.value.username,
      'password': myform.value.password,
      'temp': myform.value.role
    }
    //return this.Http.post(this.urlProviders + '/add', this.provider,{ headers });
    return this.Http.post(environment.urlRegistration, this.user);
  }
}
