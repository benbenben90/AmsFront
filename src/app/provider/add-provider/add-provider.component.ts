import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderService } from '../../provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  myform!: FormGroup;
  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      providerName: new FormControl(''),
      providerEmail: new FormControl('', [Validators.required, Validators.email]),
      providerAdress: new FormControl(''),

  });
  }

  onFormSubmit(){
    console.log("form values", this.myform.value);
    this.providerService.createProvider(this.myform).subscribe(
      (data) => {
        this.router.navigate(['/listProvider']);
      }
    );
  }

}
