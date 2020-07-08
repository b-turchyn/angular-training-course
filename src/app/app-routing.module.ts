import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// Note there is no import of the HrFilesSearchComponent or reference
// to './hr-files-search.component'.

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false, // Turn this on to log routing events to the console
  scrollPositionRestoration: 'enabled'
  // ,preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}