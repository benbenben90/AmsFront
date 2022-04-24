import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../../models/provider';
import { ProviderService } from '../../provider.service';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css'],
})
export class UpdateProviderComponent implements OnInit {
  myform!: FormGroup;
  provider: any;
  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log('mon id:', id);
    this.providerService.getProvider(id).subscribe((data: any) => {
      this.myform.setValue({
        id: data.id,
        providerName: data.name,
        providerEmail: data.email,
        providerAdress: data.address,
      });
    });
    this.myform = new FormGroup({
      id: new FormControl(),
      providerName: new FormControl(),
      providerEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      providerAdress: new FormControl(''),
    });
  }

  onFormSubmit() {
    console.log('test1', this.myform.value);
    //this.providerService.updateProvider(this.myform).subscribe();
    this.providerService.updateProvider(this.myform).subscribe(
      (data:any) => {
      this.router.navigate(['/listProvider']);
    });
  }
}
