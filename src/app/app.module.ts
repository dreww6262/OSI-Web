import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {VideoModule} from './video/video.module';
import { TeamSectionComponent } from './team-section/team-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TeamSectionComponent,
  ],
  imports: [
    BrowserModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
