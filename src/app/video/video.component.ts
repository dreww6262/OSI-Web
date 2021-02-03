
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'video.component.html',
  selector: 'app-video',
  styleUrls: ['video.component.css']
})
export class VideoComponent implements OnInit {
  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
