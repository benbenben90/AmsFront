import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  myform!: FormGroup;
  newRole!: any;
  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
      this.myform = new FormGroup({
        role: new FormControl(''),
  })
  }

  onFormSubmit():void{
    console.log(this.myform.value.role);
    this.newRole= this.myform.value.role;
    this.roleService.createRole(this.newRole).subscribe(
      (response) =>  {
        this.router.navigate(['/listRole']);
      }
      ,
      (err)=>{
        console.log('erreur: ', err.error.message);
      }
    );
  }
}
