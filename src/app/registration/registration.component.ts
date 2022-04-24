import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/regisration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(myform:any){
    this.service.createUser(myform).subscribe(
      response => {
        console.log(response);
        alert("Inscription avec succes!")
        this.router.navigate(['login']);
      }
    );
  }

}
