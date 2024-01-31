import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: Pagina1Component, title: 'Página 1 - Clase 4' },
  { path: 'dos', component: Pagina2Component, title: 'Página 2 - Clase 4' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), title: 'Auth - Clase 4'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
