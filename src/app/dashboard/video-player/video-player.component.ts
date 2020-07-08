import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input()
  video: Video | undefined;

  constructor() { }

  ngOnInit() {
  }

  videoEmbedUrl(video: Video) {
    return `https://www.youtube-nocookie.com/embed/${ video.id }`;
  }

}