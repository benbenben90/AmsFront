import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(public loginService: AuthenticationService) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
  }
}
