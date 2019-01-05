import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ClaimAddComponent } from './claim-add/claim-add.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';

const routes: Routes = [
{
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },

  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Signup' }
  },
      {
    path: 'claims',
    component: ClaimsComponent,
    data: { title: 'List of claims' }
  },
  {
    path: 'claim-add',
    component: ClaimAddComponent,
    data: { title: 'Add claim' }
  },
  {
    path: 'claim-detail',
    component: ClaimDetailComponent,
    data: { title: 'Claim Detail' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
