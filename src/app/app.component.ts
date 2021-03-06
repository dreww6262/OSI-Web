import { Component } from '@angular/core';
import { VideoComponent } from './video/video.component';
import {ApplicationStateService} from './application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApplicationStateService]
})
export class AppComponent {
  title = 'OSIWeb';

  isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService
              // private authService: AuthService
  ) {
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
    // this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

}
