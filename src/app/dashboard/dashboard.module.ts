import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoPlayerComponent, VideoDashboardComponent, StatFiltersComponent, VideoListComponent]
})
export class DashboardModule { }