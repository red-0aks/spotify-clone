import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {//http://localhost:<port>/ , cargara modulo HomeModule. La idea es que estos modulos importados tengan rutas internamente
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
