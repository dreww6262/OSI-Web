import { Component, OnInit } from '@angular/core';
import {Hexagon} from '../../_models/hexagon';
import {HexagonService} from '../hexagon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

  leftHex: Hexagon;
  rightHex: Hexagon;
  centerHex: Hexagon;
  hexList: Array<Hexagon>;
  username: string;
  url: string;
  hexID: string;
  constructor(private hexService: HexagonService, private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url.toString();
    const urlchunks = this.url.split('/');
    if (urlchunks.length > 2) {
      this.username = urlchunks[urlchunks.length - 2];
      this.hexID = urlchunks[urlchunks.length - 1];
    }
    if (this.username !== '') {
      this.hexService.getHexagons(this.username).then(r => {
        this.hexList = r;
        for (const value of r) {
          if (value.docID === this.hexID) {
            this.centerHex = value;
            break;
          }
        }
        for (const value of r) {
          if (value.location === this.centerHex.location - 1) {
            this.leftHex = value;
          }
          if (value.location === this.centerHex.location + 1) {
            this.rightHex = value;
          }
          if (this.leftHex !== null || this.rightHex !== null) {
            break;
          }
        }
      });
    }
  }

}
