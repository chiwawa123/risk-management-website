import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { ContactComponent } from './components/contact/contact.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'downloads', component:DownloadsComponent},
  {path:'contact', component:ContactComponent},
  {path:'staff', component:StaffComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
