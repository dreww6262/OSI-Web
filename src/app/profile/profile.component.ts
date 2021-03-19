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
  emptyString = '';
  points = [{x: 946.8266739736607, y: 902.5}, {x: 1081.7304845413264, y: 902.5}, {x: 1014.2785792574934, y: 1020.0},
    {x: 879.3747686898278, y: 1020.0}, {x: 811.9228634059948, y: 902.5}, {x: 879.3747686898278, y: 785.0},
    {x: 1014.2785792574934, y: 785.0}, {x: 946.8266739736607, y: 1137.5}, {x: 744.4709581221618, y: 785.0},
    {x: 1149.1823898251594, y: 785.0}, {x: 811.9228634059948, y: 667.5}, {x: 946.8266739736607, y: 667.5},
    {x: 1081.7304845413264, y: 667.5}, {x: 1216.6342951089923, y: 902.5}, {x: 1149.1823898251594, y: 1020.0},
    {x: 1081.7304845413264, y: 1137.5}, {x: 811.9228634059948, y: 1137.5}, {x: 744.4709581221618, y: 1020.0},
    {x: 677.0190528383291, y: 902.5}, {x: 879.3747686898278, y: 550.0}, {x: 1014.2785792574934, y: 550.0},
    {x: 1149.1823898251594, y: 550.0}, {x: 1216.6342951089923, y: 667.5}, {x: 1284.0862003928253, y: 785.0},
    {x: 1351.5381056766582, y: 902.5}, {x: 1284.0862003928253, y: 1020.0}, {x: 1216.6342951089923, y: 1137.5},
    {x: 1149.1823898251594, y: 1255.0}, {x: 1014.2785792574934, y: 1255.0}, {x: 879.3747686898278, y: 1255.0},
    {x: 744.4709581221618, y: 1255.0}, {x: 677.0190528383291, y: 1137.5}, {x: 609.5671475544962, y: 1020.0},
    {x: 542.1152422706632, y: 902.5}, {x: 609.5671475544962, y: 785.0}, {x: 677.0190528383291, y: 667.5}, {x: 744.4709581221618, y: 550.0},
    {x: 744.4709581221618, y: 315.0}, {x: 879.3747686898278, y: 315.0}, {x: 1014.2785792574934, y: 315.0},
    {x: 1149.1823898251594, y: 315.0}, {x: 1284.0862003928253, y: 315.0}, {x: 1351.5381056766582, y: 432.5},
    {x: 1418.990010960491, y: 550.0}, {x: 1486.441916244324, y: 667.5}, {x: 1553.8938215281566, y: 785.0},
    {x: 1621.3457268119896, y: 902.5}, {x: 1553.8938215281566, y: 1020.0}, {x: 1486.441916244324, y: 1137.5},
    {x: 1418.990010960491, y: 1255.0}, {x: 1351.5381056766582, y: 1372.5}, {x: 1284.0862003928253, y: 1490.0},
    {x: 1149.1823898251594, y: 1490.0}, {x: 1014.2785792574934, y: 1490.0}, {x: 879.3747686898278, y: 1490.0},
    {x: 744.4709581221618, y: 1490.0}, {x: 609.5671475544962, y: 1490.0}, {x: 542.1152422706632, y: 1372.5},
    {x: 474.6633369868303, y: 1255.0}, {x: 407.2114317029974, y: 1137.5}, {x: 339.7595264191645, y: 1020.0},
    {x: 272.3076211353316, y: 902.5}, {x: 339.7595264191645, y: 785.0}, {x: 407.2114317029974, y: 667.5},
    {x: 474.6633369868303, y: 550.0}, {x: 542.1152422706632, y: 432.5}, {x: 609.5671475544962, y: 315.0}];
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
        this.numHex = r.length;
      });
    }
  }

  createLink(index: number): string {
    if (this.hexagons.length <= index) {
      return '';
    }
    let thumbResource = this.hexagons[index].thumbResource;
    thumbResource = thumbResource.split('/').join('%2F');
    return `https://firebasestorage.googleapis.com/v0/b/bio-social-media.appspot.com/o/${thumbResource}?alt=media`;
  }

  profileUrl(): string {
    return `https://firebasestorage.googleapis.com/v0/b/bio-social-media.appspot.com/o/userFiles%2F${this.username}%2F${this.username}_avatar.png?alt=media`;
  }

  coverText(index: number): string {
    if (this.hexagons.length <= index) {
      return '';
    }
    return this.hexagons[index].coverText;
  }

  hexID(index: number): string {
    if (this.hexagons.length <= index) {
      return '';
    }
    return this.hexagons[index].docID;
  }

}
