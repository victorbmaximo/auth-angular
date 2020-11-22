import { AuthGuardService } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/people' },
  { path: 'main', loadChildren: () => import('./main/main.module').then((m) => m.MainModule), canActivate: [ AuthGuardService ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
