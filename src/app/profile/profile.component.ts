import { Component, OnInit } from '@angular/core';
import {Hexagon} from '../../_models/hexagon';
import { Router } from '@angular/router';
import {HexagonService} from '../hexagon.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  numHex = 0;
  hexagons: Array<Hexagon>;
  url = '';
  constructor(private router: Router, private hexService: HexagonService) {}

  ngOnInit(): void {
    this.url = this.router.url.toString();
    const urlchunks = this.url.split('/');
    if (urlchunks.length !== 0) {
      this.username = urlchunks[urlchunks.length - 1];
    }
    if (this.username !== '') {
      this.hexService.getHexagons(this.username).then(r => {
        this.hexagons = r;
      });
    }
  }

}
