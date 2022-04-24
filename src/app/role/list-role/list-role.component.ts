import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  listRole:any;
  constructor(private roleSevice: RoleService) { }

  ngOnInit(): void {
    this.roleSevice.listRoles().subscribe(
      (data) =>{
        this.listRole=data;
      }
    )
  }

}
