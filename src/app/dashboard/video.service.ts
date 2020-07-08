import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../types';
import { map } from 'rxjs/operators';

const apiBaseUrl: string = "https://api.angularbootcamp.com";

@Injectable({
  providedIn: 'root',
})
export class VideoService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(apiBaseUrl + "/videos")
    // As an example, if we needed to modify individual videos in the resulting
    // array, we could do something like this
    /**
    .pipe(map(videos => (
      videos.map(v => ({...v, title: v.title.toUpperCase()}))
    )));
    //*/
    /**
      .pipe(map(videos => (
        videos.map(v => {
          v.title = v.title.toUpperCase();
          return v;
        })
      )));
    //*/
  }
}