import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../../models/provider';
import { ProviderService } from '../../provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css'],
})
export class ListProviderComponent implements OnInit {
  listProviders: any;
  errors = [];
  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.providerService.listProviders().subscribe(
      (data) => {
        this.listProviders = data;
        console.log(this.listProviders);
      },
      (err) => {
        this.errors = err.error.message;
        alert('Error: ' + this.errors);
      }
    );
  }

  deleteProvider(provider: any) {
    const indexProvider = this.listProviders.findIndex(
      (element: any) => element === provider
    );
    if (indexProvider != -1) {
      console.log('Delete has been called', indexProvider);
      this.providerService.deleteProvider(provider).subscribe();
      this.listProviders.splice(indexProvider, 1);
    }
  }
}
