import { Component, OnInit } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {

  drewDescription = 'Andrew joined the team in April 2020 in the midst of a global pandemic to help create' +
    'something new.  He is about to graduate Virginia Tech Cum Laude with a BS in Computer Science and' +
    'a minor in Business.  Before OSI, he has enjoyed a plethora of experience working with both mobile' +
    'apps and web platforms.  Through independent studies at University, he wrote 2 native apps for ' +
    'Android and iOS using Kotlin and Swift.  He also has experience with Angular from his internship with' +
    'Booz Allen\'s District Defend team in their Strategic Innovation Group';
  team = [
    {name: 'Andrew Williamson', title: 'CTO', description: this.drewDescription, imageRef: 'assets/drew.jpeg'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
