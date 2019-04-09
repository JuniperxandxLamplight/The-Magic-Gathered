import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard.service';




const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'register', component: RegisterComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'user/:username', component: UserComponent,
    canActivate: [AuthGuard]
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
