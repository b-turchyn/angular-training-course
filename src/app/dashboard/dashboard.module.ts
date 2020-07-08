import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoListComponent } from './video-list/video-list.component';
import { Routes, RouterModule } from '@angular/router';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VideoPlayerComponent, VideoDashboardComponent, StatFiltersComponent, VideoListComponent, VideoThumbnailComponent]
})
export class DashboardModule { }