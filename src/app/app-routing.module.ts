import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { UserComponent } from './pages/user/user.component';
import { forbiddenGuard } from './guards/forbidden.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, title: 'Usuarios - Clase 2', data: {type: 1} },
  { path: 'people', data: {type: 2}, children: [
    { path: '', component: UsersComponent, title: 'Usuarios - Clase 2' },
    { path: ':id', component: UserComponent, title: 'Usuario - Clase 2', canActivate: [forbiddenGuard] }
  ]},
  //{ path: 'users/:id', component: UserComponent, title: 'Usuario - Clase 2', canActivate: [forbiddenGuard] },
  { path: 'roles', component: RolesComponent, title: 'Roles - Clase 2'  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: ErrorNotFoundComponent, title: '404 - Clase 2' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
