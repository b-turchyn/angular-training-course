import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../types';

const apiBaseUrl: string = "https://api.angularbootcamp.com";

@Injectable({
  providedIn: 'root',
})
export class VideoService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(apiBaseUrl + "/videos");
  }
}