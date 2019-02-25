import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '2019', loadChildren: './2019/2019.module#Year2019Module' },
  { path: '2018', loadChildren: './2018/2018.module#Year2018Module' },
  { path: '2017', loadChildren: './2017/2017.module#Year2017Module' },
  { path: 'users/2017', loadChildren: './users/2017/2017.module#Users2017Module'},
  { path: 'users', redirectTo: '/users/2017', pathMatch: 'full'},
  { path: '', redirectTo: '2019', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRouterModule {}
