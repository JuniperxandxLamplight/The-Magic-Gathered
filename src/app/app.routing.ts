import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard.service';
import { DeckListComponent } from './deck-list/deck-list.component';
import { LibraryComponent } from './library/library.component';




const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'user/:username', component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'deck-list', component: DeckListComponent,
  },
]

// const parentModuleRoutes: Routes = [
//     children: [
//       {
//           path:'',
//           component: LibraryComponent
//       },
//       {
//           path:'library',
//           component: LibraryComponent
//       },
//       {
//           path:'deck-list',
//           component: DeckListComponent
//       },
//     ]
//   }
// ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
// export const parentModuleRoutes: ModuleWithProviders = RouterModule.forChild(parentModuleRoutes);
