import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  urlRoles = 'http://127.0.0.1:8080/role';
  provider: any;
  constructor(private Http: HttpClient) {}
  listRoles() {
    return this.Http.get(this.urlRoles + '/list');
  }

  createRole(role: any) {
    console.log('new Role: ', role);
    return this.Http.post(this.urlRoles + '/add?role=',role);
  }
}
