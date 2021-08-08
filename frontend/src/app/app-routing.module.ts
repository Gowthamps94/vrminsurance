import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AddPolicyComponent } from './dashboard/add-policy/add-policy.component';
import { ProfileManagementComponent } from './dashboard/profile-management/profile-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '',
        component: OverviewComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'add_policy',
        component: AddPolicyComponent
      },
      {
        path: 'profile',
        component: ProfileManagementComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
