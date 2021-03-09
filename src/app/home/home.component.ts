import { Component, OnInit } from '@angular/core';
import {ApplicationStateService} from '../application-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApplicationStateService]
})
export class HomeComponent implements OnInit {

  title = 'OSIWeb';

  isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService
              // private authService: AuthService
  ) {
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
    // this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

}
