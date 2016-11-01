import { Routes, RouterModule } from '@angular/router';


import { WelcomeComponent } from './welcome-form/index';


const app_routes: Routes = [
  { path: '', component: WelcomeComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
