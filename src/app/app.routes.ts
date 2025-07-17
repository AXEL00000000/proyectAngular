import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Tabledogs } from './tabledogs/tabledogs';
import { InfoUser } from './info-user/info-user';
import { UserDialogComponent } from './user-dialog.component/user-dialog.component';


export const routes: Routes = [
    { path: '', component: Login },
    { path: 'login', component: Login },
    { path: 'tabledogs', component: Tabledogs },
    { path: 'info-user', component: InfoUser },
    { path: 'user-dialog', component: UserDialogComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // ¡Cambio clave aquí!
  exports: [RouterModule]
})
export class AppRoutingModule { }
