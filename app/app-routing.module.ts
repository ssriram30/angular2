
import { ModuleWithProviders }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { homeComponent }   from './home/home.component';
import { aboutComponent }      from './about/about.component';


const routes: Routes = [
  { path: '', component: homeComponent, pathMatch: 'full' },
  { path: 'home',  component: homeComponent },
  { path: 'about', component: aboutComponent }
  
];


export const router:ModuleWithProviders=RouterModule.forRoot(routes)

