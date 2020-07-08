import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../types';
import { VideoService } from '../video.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  @Input()
  videoList: Observable<Video[]> = this.videoService.loadVideos();
  
  selectedVideo: Video | undefined;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
  }

  doSelectVideo(video: Video) {
    console.log(video);
    this.selectedVideo = video;
  }
}