import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../types';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input()
  video: Video;

  @Input()
  selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  thumbnail(id: string) {
    return `https://img.youtube.com/vi/${ id }/0.jpg`
  }
}