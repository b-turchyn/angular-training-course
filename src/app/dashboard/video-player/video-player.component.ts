import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../types';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input()
  video: Video | undefined;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  videoEmbedUrl(video: Video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${ video.id }`);
  }

}