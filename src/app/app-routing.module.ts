import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'members',
    loadChildren: () => import('./components/members/members.module').then(m => m.MembersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
