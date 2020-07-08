import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../types';
import { HttpClient } from '@angular/common/http';

const apiBaseUrl: string = "https://api.angularbootcamp.com";

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  @Input()
  videoList: Video[] | undefined;
  
  selectedVideo: Video | undefined;

  constructor(http: HttpClient) {
    http
      .get<Video[]>(apiBaseUrl + "/videos")
      .subscribe(videos => (this.videoList = videos));
  }

  ngOnInit() {
  }

  doSelectVideo(video: Video) {
    console.log(video);
    this.selectedVideo = video;
  }
}