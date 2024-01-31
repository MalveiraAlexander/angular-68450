import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: 'reactive', component: ReactiveComponent, title: 'Formulario Reactivo - Clase3' },
  { path: 'template', component: TemplateComponent, title: 'Formulario Template - Clase3' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
