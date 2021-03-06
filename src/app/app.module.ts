import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {VideoModule} from './video/video.module';
import { TeamSectionComponent } from './team-section/team-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TeamSectionComponent,
    HomeComponent,
    ProfileComponent,
  ],
    imports: [
        BrowserModule,
        VideoModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
