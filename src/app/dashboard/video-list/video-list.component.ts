import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input()
  videos: Video[] | undefined;

  @Output()
  selectVideo: EventEmitter<Video> = new EventEmitter<Video>();

  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  doSelectVideo(video: Video) {
    this.selectedVideo = video;
    this.selectVideo.emit(video);
  }

}