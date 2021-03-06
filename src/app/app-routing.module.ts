import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PageViewComponent} from './page-view/page-view.component';

const routes: Routes = [
  { path: 'user/:id', component: ProfileComponent},
  { path: 'user/:id/:hex', component: PageViewComponent},
  // { path: '', redirectTo: '#home', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
